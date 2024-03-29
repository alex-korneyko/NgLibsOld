import {AfterViewInit, Component, ComponentFactoryResolver, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {MicroApplicationFormSettings} from './micro-application-form-settings';
import {MicroApplicationFormEvent} from './micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form-event-type.enum';
import {MicroApplicationFormContentDirective} from './micro-application-form-content.directive';
import {IMicroApplicationContent} from './i-micro-application-content';
import {WebDesktopCoreService} from '../web-desktop-core.service';

@Component({
  selector: 'wma-form',
  templateUrl: './micro-application-form.component.html',
  styleUrls: ['./micro-application-form.component.css'],
})
export class MicroApplicationFormComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MicroApplicationFormContentDirective, {static: true})
  windowHost: MicroApplicationFormContentDirective;

  @Input()
  id: number;

  @Input()
  form: MicroApplicationFormSettings;

  @Output()
  windowClick = new EventEmitter<MicroApplicationFormSettings>();

  @Output()
  fullScreenEvent = new EventEmitter<MicroApplicationFormSettings>();

  @Output()
  closeEvent = new EventEmitter<MicroApplicationFormSettings>();

  @Output()
  resizeLeftBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeRightBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeTopBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  resizeBottomBorder = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  formDragStart = new EventEmitter<MicroApplicationFormEvent>();

  @Output()
  formDragEnd = new EventEmitter<MicroApplicationFormEvent>();

  formContentInstance: IMicroApplicationContent;

  constructor(private desktopService: WebDesktopCoreService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.form.desktopService = this.desktopService;
    this.form.formContainer = this;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.form.formContent);
    let viewContainerRef = this.windowHost.viewContainerRef;
    viewContainerRef.clear();

    let windowContentRef = viewContainerRef.createComponent<IMicroApplicationContent>(componentFactory);
    this.formContentInstance = windowContentRef.instance;
    this.formContentInstance.form = this.form;
    this.formContentInstance.FormOnInit();
  }

  ngAfterViewInit() {
    this.formContentInstance.FormAfterInit();
  }

  ngOnDestroy() {
    this.windowHost.viewContainerRef.clear();

  }

  CloseClick = (event?: MouseEvent) => {
    event?.stopPropagation();
    this.closeEvent.emit(this.form);
    this.desktopService.CloseForm(this.form, this.formContentInstance);
  }

  FullScreenClick(event?: MouseEvent) {
    event?.stopPropagation();
    if (!this.form.allowMaximize)
      return;

    this.formContentInstance.FormOnMaximize();
    this.fullScreenEvent.emit(this.form);
    this.formContentInstance.FormAfterMaximize();
  }

  BackgroundClick(event: MouseEvent) {
    event.stopPropagation();
    this.formContentInstance.FormOnMinimize();
    this.form.isMinimized = true;
    this.form.isActive = false;
    this.formContentInstance.FormAfterMinimize();
  }

  WindowAreaClick = (event: MouseEvent) => {
    event.stopPropagation();
    this.windowClick.emit(this.form);
  }

  DragRightBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.form, MicroApplicationFormEventType.RESIZE_RIGHT);
    windowEvent.dragEvent = event;

    this.resizeRightBorder.emit(windowEvent)
    this.formContentInstance.FormOnResize();
  }

  DragLeftBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.form, MicroApplicationFormEventType.RESIZE_LEFT);
    windowEvent.dragEvent = event;

    this.resizeLeftBorder.emit(windowEvent)
    this.formContentInstance.FormOnResize();
  }

  DragTopBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.form, MicroApplicationFormEventType.RESIZE_UP);
    windowEvent.dragEvent = event;

    this.resizeTopBorder.emit(windowEvent);
    this.formContentInstance.FormOnResize();
  }

  DragBottomBorder(event: DragEvent) {
    let windowEvent = new MicroApplicationFormEvent(this.form, MicroApplicationFormEventType.RESIZE_DOWN);
    windowEvent.dragEvent = event;

    this.resizeBottomBorder.emit(windowEvent);
    this.formContentInstance.FormOnResize();
  }

  HeaderDragStart(event: DragEvent) {
    event.stopPropagation()
    let formEvent = new MicroApplicationFormEvent(this.form, MicroApplicationFormEventType.DRAG_WINDOW);
    formEvent.dragEvent = event;
    this.formDragStart.emit(formEvent)
    event.dataTransfer.effectAllowed = "move";
  }

  HeaderDragEnd(event: DragEvent) {
    event.stopPropagation();
    this.formDragEnd.emit(new MicroApplicationFormEvent(this.form, MicroApplicationFormEventType.DRAG_WINDOW))
  }

  VerticalBorderDragStart(event: DragEvent) {
    event.dataTransfer.effectAllowed = "move"
  }

  HorizontalBorderDragStart(event: DragEvent) {
    event.dataTransfer.effectAllowed = "move"
  }

  DragTopLeftCorner(event: DragEvent) {
    this.DragTopBorder(event);
    this.DragLeftBorder(event);
  }

  DragTopRightCorner(event: DragEvent) {
    this.DragTopBorder(event);
    this.DragRightBorder(event);
  }

  DragBottomLeftCorner(event: DragEvent) {
    this.DragBottomBorder(event);
    this.DragLeftBorder(event);
  }

  DragBottomRightCorner(event: DragEvent) {
    this.DragBottomBorder(event);
    this.DragRightBorder(event);
  }
}
