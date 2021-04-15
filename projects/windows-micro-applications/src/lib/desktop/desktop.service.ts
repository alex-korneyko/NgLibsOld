import {Injectable, Type} from '@angular/core';
import {MicroApplicationFormParams} from './micro-application-form/micro-application-form-params';
import {MicroApplicationFormEvent} from './micro-application-form/micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form/micro-application-form-event-type.enum';
import {WorkspaceParams} from './workcpace/workspace-params';
import {MicroApplication} from './micro-application';

@Injectable()
export class DesktopService {

  windows = new Array<MicroApplicationFormParams>();

  currentWindow: MicroApplicationFormParams;
  currentWindowEvent: MicroApplicationFormEvent;

  mainMenuIsShown = false;

  screenX: number;
  screenY: number;

  workspaceParams = new WorkspaceParams()
  workspaceSizeMessage: string;

  constructor() {
    this.screenX = screen.width;
    this.screenY = screen.height;
  }

  AddWindow = (microApplication: MicroApplication): number => {
    let maxZ = 0;

    let index = this.windows.findIndex(win => win.windowContent === microApplication.microAppForm);
    if (index > -1) {
      if (this.windows[index].isSingleton) {
        this.ActivateWindow(this.windows[index]);
        return this.currentWindow.id;
      }
    }

    this.windows.forEach(win => {
      win.isActive = false;
      if (win.zPos > maxZ) {
        maxZ = win.zPos;
      }
    });

    this.currentWindow = new MicroApplicationFormParams(microApplication.microAppForm, maxZ + 10);
    this.currentWindow.header = microApplication.title;
    this.windows.push(this.currentWindow);

    return this.currentWindow.id;
  }

  GetWindows(): MicroApplicationFormParams[] {
    return this.windows.sort((w1, w2) => w1.created > w2.created ? 1 : -1)
  }

  ActivateWindow(microApplicationFormParams: MicroApplicationFormParams) {
    this.currentWindow = microApplicationFormParams;
    microApplicationFormParams.isBackground = false;
    this.WindowClick(microApplicationFormParams.id)
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

  WorkspaceAreResize(event: any) {
    this.workspaceParams.xSize = event.clientWidth
    this.workspaceParams.ySize = event.clientHeight;
  }

  CheckWorkspaceSize(): boolean {
    if (this.screenX < 1200 || this.screenY < 800) {
      this.workspaceSizeMessage = "Your screen size is too small";
      return false;
    }

    if (this.workspaceParams.xSize < 1150 || this.workspaceParams.ySize < 600) {
      this.workspaceSizeMessage = "Your browser size is too small";
      return false;
    }

    return true;
  }
}
