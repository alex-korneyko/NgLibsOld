import {Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, Type, ViewChild} from '@angular/core';
import {MicroApplicationFormParams} from './micro-application-form-params';
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
  params: MicroApplicationFormParams;

  @Output()
  windowClick = new EventEmitter<number>();

  @Output()
  fullScreenEvent = new EventEmitter<number>();

  @Output()
  closeEvent = new EventEmitter<number>();

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

  constructor(public formService: MicroApplicationFormService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.formService.formParams = this.params;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.params.windowContent);
    let viewContainerRef = this.windowHost.viewContainerRef;
    viewContainerRef.clear();

    let windowContentRef = viewContainerRef.createComponent<MicroApplicationContent>(componentFactory);
    windowContentRef.instance.id = this.id;
  }

  ngOnDestroy() {
    this.windowHost.viewContainerRef.clear();
  }

  CloseClick = () => {
    this.closeEvent.emit(this.id);
  }

  WindowAreaClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.windowClick.emit(this.id);
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

  FullScreenClick() {
    this.fullScreenEvent.emit(this.id);
  }

  BackgroundClick() {

  }

  WindowResize(event: UIEvent) {
    console.log(event)
  }
}
