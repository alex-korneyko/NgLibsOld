export class WindowDragEvent {

  windowId: number;
  dragEvent: DragEvent;

  constructor(windowId: number, dragEvent: DragEvent) {
    this.windowId = windowId;
    this.dragEvent = dragEvent;
  }
}
