import {WindowEventType} from './window-event-type.enum';

export class WindowEvent {
  windowId: number;
  windowEventType: WindowEventType;
  dragEvent: DragEvent;
  mouseEvent: MouseEvent;


  constructor(windowId: number, windowEventType: WindowEventType) {
    this.windowEventType = WindowEventType.NONE;
    this.windowId = windowId;
    this.windowEventType = windowEventType;
  }
}
