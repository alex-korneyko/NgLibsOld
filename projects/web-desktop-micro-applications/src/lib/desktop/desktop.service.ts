import {Injectable} from '@angular/core';
import {MicroApplicationFormSettings} from './micro-application-form/micro-application-form-settings';
import {MicroApplicationFormEvent} from './micro-application-form/micro-application-form-event';
import {MicroApplicationFormEventType} from './micro-application-form/micro-application-form-event-type.enum';
import {HtmlObjectCoordinates} from './workcpace/html-object-coordinates';
import {IMicroApplicationBox} from './micrioApplications/i-micro-application-box';
import {MicroApplicationState} from './micrioApplications/micro-application-state.enum';
import {MicroApplications} from './micrioApplications/micro.applications';
import {IMicroApplicationContent} from './micro-application-form/i-micro-application-content';

@Injectable({
  providedIn: 'root'
})
export class DesktopService {

  forms = new Array<MicroApplicationFormSettings>();

  activeForm: MicroApplicationFormSettings;
  currentWindowEvent: MicroApplicationFormEvent;

  mainMenuIsShown = false;

  windowOnResizeHandlers = new Array<Function>()

  screenX: number;
  screenY: number;

  taskPanelParams = new HtmlObjectCoordinates();
  workspaceParams = new HtmlObjectCoordinates()
  workspaceSizeError = false;
  workspaceSizeMessage: string;

  readonly taskPanelItemWidth = 200;
  taskPanelItemActualWidth = 200;

  constructor() {
    this.screenX = screen.width;
    this.screenY = screen.height;

    window.onresize = () => {
      this.windowOnResizeHandlers.forEach(handler => handler.apply(this))
    }
  }

  StartApplication = (microApplicationBox: IMicroApplicationBox) => {

    if (microApplicationBox.microApplicationState === MicroApplicationState.Running) {
      let index = this.forms.findIndex(form => form.formContent === microApplicationBox.microApplication.formContentComponent);
      if (index > -1) {
        this.CheckForSingleton(this.forms[index]);
      }
      return;
    }

    microApplicationBox.microApplication.BeforeApplicationStart();

    let microApplicationFormSettings = new MicroApplicationFormSettings(microApplicationBox.microApplication.formContentComponent);

    microApplicationFormSettings.desktopService = this;

    microApplicationBox.Run();

    this.forms.push(microApplicationFormSettings);

    microApplicationBox.microApplication.AfterApplicationStart();

    this.CheckAndRearrangeTasksOnTaskPanel();
    this.ActivateForm(microApplicationFormSettings);
    this.activeForm.header = microApplicationBox.microApplication.title;
  }

  AddNewForm = (microApplicationFormSettings: MicroApplicationFormSettings) => {
    if (this.CheckForSingleton(microApplicationFormSettings)) {
      return;
    }

    microApplicationFormSettings.desktopService = this;
    this.forms.push(microApplicationFormSettings);
    this.CheckAndRearrangeTasksOnTaskPanel();
    this.ActivateForm(microApplicationFormSettings);
  }

  private CheckForSingleton(form: MicroApplicationFormSettings): boolean {
    let index = this.forms.findIndex(winForm => winForm.formContent === form.formContent);
    if (index > -1) {
      if (this.forms[index].isSingleton && this.forms[index].parent === form.parent) {
        this.ActivateForm(this.forms[index]);
        return true;
      }
    }
    return false;
  }

  GetWindowsSortedByCreation(): MicroApplicationFormSettings[] {
    return this.forms.sort((w1, w2) => w1.created > w2.created ? 1 : -1)
  }

  CloseForm(formSettings: MicroApplicationFormSettings, instance?: IMicroApplicationContent) {
    instance?.FormOnDestroy();
    if (formSettings.isModal) {
      formSettings.parent.isBlockedByChildren = false;
      formSettings.parent.isActive = true;
    }

    formSettings.children.forEach(child => {
      if (child.closeIfParentClosed) {
        this.CloseForm(child);
      }
    });

    let index = this.forms.findIndex(form => form === formSettings);
    if (index > -1) {
      this.forms.splice(index, 1);
    }
    instance?.FormAfterDestroy();

    index = MicroApplications.applicationBoxes
      .findIndex(appBox => appBox.microApplication.formContentComponent === formSettings.formContent);
    if (index > -1) {
      MicroApplications.applicationBoxes[index].Stop();
    }
  }

  CloseEventHandler(microApplicationForm: MicroApplicationFormSettings) {

  }

  ActivateForm(microApplicationForm: MicroApplicationFormSettings) {
    this.activeForm = microApplicationForm;
    microApplicationForm.isMinimized = false;

    DesktopService.formsRearrange(this.forms);

    this.mainMenuIsShown = false;
    this.activeForm.isActive = true;
    this.activeForm.zPos = this.forms.length * 10;
    if (this.activeForm.isModal) {
      this.activeForm.parent.zPos = this.activeForm.zPos - 5;
    }
  }

  private static formsRearrange(forms: MicroApplicationFormSettings[]) {
    let tmpListOfForms = new Array<MicroApplicationFormSettings>(...forms);
    tmpListOfForms.sort((win1, win2) => win1.zPos > win2.zPos ? 1 : -1);
    for (let i = 0; i < tmpListOfForms.length; i++) {
      tmpListOfForms[i].isActive = false;
      tmpListOfForms[i].zPos = i * 10;
    }
  }

  DragOver = (event: DragEvent) => {
    let offsetX = event.clientX;
    let offsetY = event.clientY;
    if (this.currentWindowEvent?.windowEventType === MicroApplicationFormEventType.DRAG_WINDOW) {
      this.activeForm.xPos = offsetX - this.currentWindowEvent.dragEvent.offsetX;
      this.activeForm.yPos = offsetY - this.currentWindowEvent.dragEvent.offsetY;
      this.activeForm.formContainer.formContentInstance.FormOnMove();
    }
    event.preventDefault();
  }

  DragEnter(event: DragEvent) {
    event.preventDefault();
  }

  Drop(event: DragEvent) {
    this.currentWindowEvent = null;
  }

  ResizeBottomBorder(event: MicroApplicationFormEvent) {
    if (event.form.ySize + event.dragEvent.offsetY < event.form.yMinSize) {
      return;
    }
    event.form.ySize += event.dragEvent.offsetY;
  }

  ResizeTopBorder(event: MicroApplicationFormEvent) {
    if (event.form.ySize - event.dragEvent.offsetY < event.form.yMinSize) {
      return;
    }
    event.form.ySize -= event.dragEvent.offsetY;
    event.form.yPos += event.dragEvent.offsetY;
  }

  ResizeRightBorder(event: MicroApplicationFormEvent) {
    if (event.form.xSize + event.dragEvent.offsetX < event.form.xMinSize) {
      return;
    }
    event.form.xSize += event.dragEvent.offsetX
  }

  ResizeLeftBorder(event: MicroApplicationFormEvent) {
    if (event.form.xSize - event.dragEvent.offsetX < event.form.xMinSize) {
      return;
    }
    event.form.xSize -= event.dragEvent.offsetX;
    event.form.xPos += event.dragEvent.offsetX
  }

  FullScreenEventHandler(microApplicationForm: MicroApplicationFormSettings) {
    microApplicationForm.isMaximized = !microApplicationForm.isMaximized;
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

  WorkspaceAreOnResizeHandler(event: any) {
    this.workspaceParams.xSize = event.clientWidth
    this.workspaceParams.ySize = event.clientHeight;

    this.CheckWorkspaceSize();
  }

  TaskPanelAreaOnResizeHandler(event: any) {
    this.taskPanelParams.xSize = event.clientWidth;
    this.taskPanelParams.ySize = event.clientHeight;

    this.CheckAndRearrangeTasksOnTaskPanel();
  }

  private CheckWorkspaceSize() {
    if (this.screenX < 1200 || this.screenY < 800) {
      this.workspaceSizeMessage = "Your screen size is too small";
      this.workspaceSizeError = true;
      return;
    }

    if (this.workspaceParams.xSize < 1150 || this.workspaceParams.ySize < 600) {
      this.workspaceSizeMessage = "Your browser size is too small";
      this.workspaceSizeError = true
      return;
    }

    this.workspaceSizeError = false;

    this.CheckAndRearrangeForms();
  }

  private CheckAndRearrangeForms() {
    this.forms.forEach(form => {
      if (form.xPos > this.workspaceParams.xSize - 20) {
        form.xPos -= 50;
      }
      if (form.yPos > this.workspaceParams.ySize - 20) {
        form.yPos -= 50;
      }
    })
  }

  private CheckAndRearrangeTasksOnTaskPanel() {
    if (this.forms.length === 0) {
      return;
    }

    let taskPanelItemCalcWidth = (this.workspaceParams.xSize - 90) / this.forms.length;

    if (taskPanelItemCalcWidth > this.taskPanelItemWidth) {
      this.taskPanelItemActualWidth = 200;
    } else {
      this.taskPanelItemActualWidth = taskPanelItemCalcWidth;
    }
  }

  FormDragStartHandler(event: MicroApplicationFormEvent) {
    this.currentWindowEvent = event;
  }

  FormDragEndHandler(event: MicroApplicationFormEvent) {
    this.currentWindowEvent = null;
  }

  BlockForm(form: MicroApplicationFormSettings) {
    setTimeout(() => form.isBlockedByChildren = true, 10)
  }
}
