import {Injectable} from '@angular/core';
import {MicroAppForm} from './micro-application-form/micro-app-form';
import {MicroApplicationFormEvent} from './micro-application-form/micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form/micro-application-form-event-type.enum';
import {WorkspaceParams} from './workcpace/workspace-params';
import {MicroApplication} from './micro-application';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  forms = new Array<MicroAppForm>();

  activeForm: MicroAppForm;
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

  StartApplication = (microApplication: MicroApplication) => {

    let microApplicationForm = new MicroAppForm(microApplication.formContentComponent);
    microApplicationForm.desktopService = this;

    if (this.CheckForSingleton(microApplicationForm)) {
      return;
    }

    this.forms.push(microApplicationForm);
    this.ActivateForm(microApplicationForm);
    this.activeForm.header = microApplication.title;
  }

  AddNewForm = (microApplicationForm: MicroAppForm) => {
    if (this.CheckForSingleton(microApplicationForm)) {
      return;
    }

    this.forms.push(microApplicationForm);
    this.ActivateForm(microApplicationForm);
  }

  private CheckForSingleton(form: MicroAppForm): boolean {
    let index = this.forms.findIndex(winForm => winForm.formContent === form.formContent);
    if (index > -1) {
      if (this.forms[index].isSingleton && this.forms[index].parent === form.parent) {
        this.ActivateForm(this.forms[index]);
        return true;
      }
    }
    return false;
  }

  GetWindowsSortedByCreation(): MicroAppForm[] {
    return this.forms.sort((w1, w2) => w1.created > w2.created ? 1 : -1)
  }

  CloseForm(microApplicationForm: MicroAppForm) {
    let index = this.forms.findIndex(win => win.id === microApplicationForm.id);
    if (index > -1) {
      this.forms.splice(index, 1);
    }
  }

  CloseEventHandler(microApplicationForm: MicroAppForm) {
    // this.CloseForm(microApplicationForm);
  }

  ActivateForm(microApplicationForm: MicroAppForm) {
    this.activeForm = microApplicationForm;
    microApplicationForm.isBackground = false;

    this.forms.sort((win1, win2) => win1.zPos > win2.zPos ? 1 : -1);
    for (let i = 0; i < this.forms.length; i++) {
      this.forms[i].isActive = false;
      this.mainMenuIsShown = false;
      this.forms[i].zPos = i + 10;
    }

    this.activeForm.isActive = true;
    this.activeForm.zPos = this.forms.length * 10 + 10;
  }

  DragOver = (event: DragEvent) => {
    let offsetX = event.clientX;
    let offsetY = event.clientY;
    if (this.currentWindowEvent?.windowEventType === MicroApplicationFormEventType.DRAG_WINDOW) {
      this.activeForm.xPos = offsetX - this.currentWindowEvent.mouseEvent.offsetX;
      this.activeForm.yPos = offsetY - this.currentWindowEvent.mouseEvent.offsetY;
    }
    event.preventDefault();
  }

  DragEnter(event: DragEvent) {
    event.preventDefault();
  }

  Drop(event: DragEvent) {
    this.currentWindowEvent = null;
  }

  private GetWindow = (windowId: number): MicroAppForm => {
    let index = this.forms.findIndex(win => win.id === windowId);
    if (index > -1) {
      return this.forms[index];
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
    if (windowParams.ySize + event.dragEvent.offsetY < windowParams.yMinSize) {
      return;
    }
    windowParams.ySize += event.dragEvent.offsetY;
  }

  ResizeTopBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    if (windowParams.ySize - event.dragEvent.offsetY < windowParams.yMinSize) {
      return;
    }
    windowParams.ySize -= event.dragEvent.offsetY;
    windowParams.yPos += event.dragEvent.offsetY;
  }

  ResizeRightBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    if (windowParams.xSize + event.dragEvent.offsetX < windowParams.xMinSize) {
      return;
    }
    windowParams.xSize += event.dragEvent.offsetX
  }

  ResizeLeftBorder(event: MicroApplicationFormEvent) {
    let windowParams = this.GetWindow(event.windowId);
    if (windowParams.xSize - event.dragEvent.offsetX < windowParams.xMinSize) {
      return;
    }
    windowParams.xSize -= event.dragEvent.offsetX;
    windowParams.xPos += event.dragEvent.offsetX
  }

  FullScreenEventHandler(microApplicationForm: MicroAppForm) {
    microApplicationForm.isFullScreen = !microApplicationForm.isFullScreen;
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
