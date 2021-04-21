import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {MicroAppForm} from './micro-app-form';
import {MicroApplicationFormEvent} from './micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form-event-type.enum';
import {MicroApplicationFormContentDirective} from './micro-application-form-content.directive';
import {MicroApplicationContent} from './micro-application-content';
import {DesktopService} from '../desktop.service';

@Component({
  selector: 'wma-form',
  templateUrl: './micro-application-form.component.html',
  styleUrls: ['./micro-application-form.component.css'],
})
export class MicroApplicationFormComponent implements OnInit, OnDestroy {

  @ViewChild(MicroApplicationFormContentDirective, {static: true})
  windowHost: MicroApplicationFormContentDirective;

  @Input()
  id: number;

  @Input()
  microApplicationForm: MicroAppForm;

  @Output()
  windowClick = new EventEmitter<MicroAppForm>();

  @Output()
  fullScreenEvent = new EventEmitter<MicroAppForm>();

  @Output()
  closeEvent = new EventEmitter<MicroAppForm>();

  @Output()
  windowHeaderMouseDown = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  windowHeaderMouseUp = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeLeftBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeRightBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeTopBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeBottomBorder = new EventEmitter<MicroApplicationFormEvent>();

  private formContentInstance: MicroApplicationContent;

  constructor(private desktopService: DesktopService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.microApplicationForm.desktopService = this.desktopService;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.microApplicationForm.formContent);
    let viewContainerRef = this.windowHost.viewContainerRef;
    viewContainerRef.clear();

    let windowContentRef = viewContainerRef.createComponent<MicroApplicationContent>(componentFactory);
    this.formContentInstance = windowContentRef.instance;
    this.formContentInstance.id = this.id;
    this.formContentInstance.form = this.microApplicationForm;
    this.formContentInstance.FormOnInit();
  }

  ngOnDestroy() {
    this.windowHost.viewContainerRef.clear();
  }

  CloseClick = (event: MouseEvent) => {
    this.formContentInstance.FormBeforeDestroy();
    this.closeEvent.emit(this.microApplicationForm);
    event.stopPropagation();
    this.microApplicationForm.Close()
    this.formContentInstance.FormAfterDestroy();
  }

  WindowAreaClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.windowClick.emit(this.microApplicationForm);
  }

  WindowHeaderMouseDown = (event: MouseEvent) => {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.DRAG_WINDOW);
    windowEvent.mouseEvent = event;

    this.windowHeaderMouseDown.emit(windowEvent);
  }

  WindowHeaderMouseUp(event: MouseEvent) {
    this.windowHeaderMouseUp.emit(new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.NONE))
  }

  DragRightBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_RIGHT);
    windowEvent.dragEvent = event;

    this.resizeRightBorder.emit(windowEvent)
    this.formContentInstance.FormOnResize();
  }

  DragLeftBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_LEFT);
    windowEvent.dragEvent = event;

    this.resizeLeftBorder.emit(windowEvent)
    this.formContentInstance.FormOnResize();
  }

  DragTopBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_UP);
    windowEvent.dragEvent = event;

    this.resizeTopBorder.emit(windowEvent);
    this.formContentInstance.FormOnResize();
  }

  DragBottomBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_DOWN);
    windowEvent.dragEvent = event;

    this.resizeBottomBorder.emit(windowEvent);
    this.formContentInstance.FormOnResize();
  }

  HeaderDragStart(event: DragEvent) {
    event.dataTransfer.effectAllowed = "move";
  }

  VerticalBorderDragStart(event: DragEvent) {
    event.dataTransfer.effectAllowed = "move"
  }

  HorizontalBorderDragStart(event: DragEvent) {
    event.dataTransfer.effectAllowed = "move"
  }

  FullScreenClick(event: MouseEvent) {
    event.stopPropagation();
    this.formContentInstance.FormBeforeMaximize();
    this.fullScreenEvent.emit(this.microApplicationForm);
    this.formContentInstance.FormAfterMaximize();
  }

  BackgroundClick(event: MouseEvent) {
    event.stopPropagation();
    this.formContentInstance.FormBeforeMinimize();
    this.microApplicationForm.isBackground = true;
    this.microApplicationForm.isActive = false;
    this.formContentInstance.FormAfterMinimize();
  }
}
