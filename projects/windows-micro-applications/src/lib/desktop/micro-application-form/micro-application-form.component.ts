import {
  AfterViewChecked,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Type,
  ViewChild
} from '@angular/core';
import {MicroAppForm} from './micro-app-form';
import {MicroApplicationFormEvent} from './micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form-event-type.enum';
import {MicroApplicationFormContentDirective} from './micro-application-form-content.directive';
import {MicroApplicationContent} from './micro-application-content';
import {MicroApplicationFormService} from './micro-application-form.service';

@Component({
  selector: 'wma-form',
  templateUrl: './micro-application-form.component.html',
  styleUrls: ['./micro-application-form.component.css'],
  providers: [MicroApplicationFormService]
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

  constructor(public formService: MicroApplicationFormService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.formService.formParams = this.microApplicationForm;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.microApplicationForm.formContent);
    let viewContainerRef = this.windowHost.viewContainerRef;
    viewContainerRef.clear();

    let windowContentRef = viewContainerRef.createComponent<MicroApplicationContent>(componentFactory);
    windowContentRef.instance.id = this.id;
    windowContentRef.instance.form = this.microApplicationForm;
    windowContentRef.instance.FormInit();
  }

  ngOnDestroy() {
    this.windowHost.viewContainerRef.clear();
  }

  CloseClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.microApplicationForm.Close()
    this.closeEvent.emit(this.microApplicationForm);
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
  }

  DragLeftBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_LEFT);
    windowEvent.dragEvent = event;

    this.resizeLeftBorder.emit(windowEvent)
  }

  DragTopBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_UP);
    windowEvent.dragEvent = event;

    this.resizeTopBorder.emit(windowEvent);
  }

  DragBottomBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.id, MicroApplicationFormEventType.RESIZE_DOWN);
    windowEvent.dragEvent = event;

    this.resizeBottomBorder.emit(windowEvent);
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
    this.fullScreenEvent.emit(this.microApplicationForm);
  }

  BackgroundClick(event: MouseEvent) {
    event.stopPropagation();
    this.microApplicationForm.isBackground = true;
    this.microApplicationForm.isActive = false;
  }

  WindowResize(event: UIEvent) {
    console.log(event)
  }

  DragButton(event: DragEvent) {
    console.log('DragButton', event);
  }
}
