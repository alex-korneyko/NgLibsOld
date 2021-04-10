import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WindowParams} from './window-params';
import {WindowEvent} from './window-event';
import {WindowEventType} from './window-event-type.enum';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  params: WindowParams;

  @Output()
  windowClick = new EventEmitter<number>();

  @Output()
  closeEvent = new EventEmitter<number>();

  @Output()
  windowHeaderMouseDown = new EventEmitter<WindowEvent>();

  @Output()
  windowHeaderMouseUp = new EventEmitter<WindowEvent>();

  @Output()
  resizeLeftBorder = new EventEmitter<WindowEvent>();

  @Output()
  resizeRightBorder = new EventEmitter<WindowEvent>();

  @Output()
  resizeTopBorder = new EventEmitter<WindowEvent>();

  @Output()
  resizeBottomBorder = new EventEmitter<WindowEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  CloseClick = () => {
    this.closeEvent.emit(this.id);
  }

  WindowAreaClick = (event: MouseEvent) => {
    this.windowClick.emit(this.id);
  }

  WindowHeaderMouseDown = (event: MouseEvent) => {
    let windowEvent = new WindowEvent(this.id, WindowEventType.DRAG_WINDOW);
    windowEvent.mouseEvent = event;

    this.windowHeaderMouseDown.emit(windowEvent);
  }

  WindowHeaderMouseUp(event: MouseEvent) {
    console.log("WindowHeaderMouseUp")
    this.windowHeaderMouseUp.emit(new WindowEvent(this.id, WindowEventType.NONE))
  }

  DragRightBorder(event: DragEvent) {
    let windowEvent = new WindowEvent(this.id, WindowEventType.RESIZE_RIGHT);
    windowEvent.dragEvent = event;

    this.resizeRightBorder.emit(windowEvent)
  }

  DragLeftBorder(event: DragEvent) {
    let windowEvent = new WindowEvent(this.id, WindowEventType.RESIZE_LEFT);
    windowEvent.dragEvent = event;

    this.resizeLeftBorder.emit(windowEvent)
  }

  DragTopBorder(event: DragEvent) {
    let windowEvent = new WindowEvent(this.id, WindowEventType.RESIZE_UP);
    windowEvent.dragEvent = event;

    this.resizeTopBorder.emit(windowEvent);
  }

  DragBottomBorder(event: DragEvent) {
    let windowEvent = new WindowEvent(this.id, WindowEventType.RESIZE_DOWN);
    windowEvent.dragEvent = event;

    this.resizeBottomBorder.emit(windowEvent);
  }
}
