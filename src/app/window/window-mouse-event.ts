export class WindowMouseEvent {
  windowId: number;
  mouseEvent: MouseEvent;

  constructor(windowId: number, mouseEvent: MouseEvent) {
    this.windowId = windowId;
    this.mouseEvent = mouseEvent;
  }
}
