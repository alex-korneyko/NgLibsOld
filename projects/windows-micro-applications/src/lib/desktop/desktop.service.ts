import {Injectable, Type} from '@angular/core';
import {MicroApplicationFormParams} from './micro-application-form/micro-application-form-params';
import {MicroApplicationFormEvent} from './micro-application-form/micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form/micro-application-form-event-type.enum';

@Injectable()
export class DesktopService {

  windows = new Array<MicroApplicationFormParams>();
  currentWindow: MicroApplicationFormParams;
  currentWindowEvent: MicroApplicationFormEvent;
  testName = "Alex";

  mainMenuIsShown = false;

  constructor() { }

  AddWindow = (windowContentComponent: Type<any>): number => {
    this.windows.forEach(win => win.isActive = false);

    let maxZ = 0;
    this.windows.forEach(win => {
      win.isActive = false;
      if (win.zPos > maxZ) {
        maxZ = win.zPos;
      }
    });

    this.currentWindow = new MicroApplicationFormParams(windowContentComponent, maxZ + 10);
    this.windows.push(this.currentWindow);

    return this.currentWindow.id;
  }

  SetActiveWindow(windowId: number) {
    this.windows.forEach(win => win.isActive = false);
    this.GetWindow(windowId).isActive = true;
  }

  CloseWindow(windowId: number) {
    let index = this.windows.findIndex(win => win.id === windowId);
    if (index > -1) {
      this.windows.splice(index, 1);
    }
  }

  CloseEventHandler(windowId: number) {
    let index = this.windows.findIndex(win => win.id === windowId);
    if (index > -1) {
      this.windows.splice(index, 1);
    }
  }

  WindowClick = (windowId: number) => {
    this.windows.sort((win1, win2) => win1.zPos > win2.zPos ? 1 : -1);
    for (let i = 0; i < this.windows.length; i++) {
      this.windows[i].isActive = false;
      this.mainMenuIsShown = false;
      this.windows[i].zPos = i + 10;
    }

    this.currentWindow = this.GetWindow(windowId);
    this.currentWindow.isActive = true;
    this.currentWindow.zPos = this.windows.length * 10 + 10;
  }

  DragOver = (event: DragEvent) => {
    let offsetX = event.clientX;
    let offsetY = event.clientY;
    if (this.currentWindowEvent?.windowEventType === MicroApplicationFormEventType.DRAG_WINDOW) {
      this.currentWindow.xPos = offsetX - this.currentWindowEvent.mouseEvent.offsetX;
      this.currentWindow.yPos = offsetY - this.currentWindowEvent.mouseEvent.offsetY;
    }
    event.preventDefault();
  }

  DragEnter(event: DragEvent) {
    event.preventDefault();
  }

  Drop(event: DragEvent) {
    this.currentWindowEvent = null;
  }

  private GetWindow = (windowId: number): MicroApplicationFormParams => {
    let index = this.windows.findIndex(win => win.id === windowId);
    if (index > -1) {
      return this.windows[index];
    }
  }

  HeaderMouseUp(event: MicroApplicationFormEvent) {
    this.currentWindowEvent = null;
  }

  HeaderMouseDown = (event: MicroApplicationFormEvent) => {
    this.currentWindowEvent = event;
  }

  ResizeBottomBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    windowParams.ySize += event.dragEvent.offsetY
  }

  ResizeTopBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    windowParams.ySize -= event.dragEvent.offsetY;
    windowParams.yPos += event.dragEvent.offsetY;
  }

  ResizeRightBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    windowParams.xSize += event.dragEvent.offsetX
  }

  ResizeLeftBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    windowParams.xSize -= event.dragEvent.offsetX;
    windowParams.xPos += event.dragEvent.offsetX
  }

  FullScreenEventHandler(event: number) {
    let windowParams = this.GetWindow(event);
    windowParams.isFullScreen = !windowParams.isFullScreen;
  }

  ShowMenu(event: MouseEvent) {
    event.stopPropagation();
    this.mainMenuIsShown = !this.mainMenuIsShown;
  }

  WorkSpaceMouseClick(event: MouseEvent) {
    this.mainMenuIsShown = false;
  }

  TaskPanelMouseClick(event: MouseEvent) {
    this.mainMenuIsShown = false;
  }
}
