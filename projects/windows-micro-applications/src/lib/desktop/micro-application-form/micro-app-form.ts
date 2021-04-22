import {Type} from '@angular/core';
import {MicroApplicationFormContent} from './micro-application-form-content';
import {DesktopService} from '../desktop.service';
import {MicroApplicationFormComponent} from './micro-application-form.component';

export class MicroAppForm {
  readonly id: number;
  formContainer: MicroApplicationFormComponent;
  readonly formContent: Type<MicroApplicationFormContent>;
  desktopService: DesktopService;
  params: any;
  readonly children = new Array<MicroAppForm>()
  parent: MicroAppForm;
  closeWithChildren = false;
  readonly created: Date;
  xPos = 100;
  yPos = 50;
  zPos: number;
  xMinSize = 450;
  yMinSize = 300;
  xSize = 0;
  ySize = 0;
  allowFullScreen = true;
  isFullScreen = false;
  private _isModal = false;
  isBackground = false;
  isActive: boolean;
  isHidden: boolean;
  isSingleton: boolean;
  header: string;
  isBlockedByChildren = false;

  constructor(content: Type<MicroApplicationFormContent>, params?: any) {
    this.created = new Date();
    this.id = this.created.valueOf();
    this.formContent = content;
    this.params = params;
    this.isActive = true;
    this.isSingleton = true;

    if (this.xSize < this.xMinSize) {
      this.xSize = this.xMinSize;
    }

    if (this.ySize < this.yMinSize) {
      this.ySize = this.yMinSize;
    }
  }

  AddChildren = (form: MicroAppForm) => {
    form.parent = this;
    if (form.isModal) {
      this.isBlockedByChildren = true;
    }
    this.children.push(form);
    this.desktopService.AddNewForm(form);
  }

  Close(parent?: MicroAppForm) {
    if (this.parent != null) {
      this.parent.isBlockedByChildren = false;
      this.desktopService.ActivateForm(this.parent);
    }
    this.children.forEach(form => form.Close(this));

    if (parent == null || this.closeWithChildren) {
      this.desktopService.CloseForm(this)
    }
  }

  get isModal(): boolean {
    return this._isModal;
  }

  set isModal(value: boolean) {
    this.parent.isBlockedByChildren = value;
    this._isModal = value;
  }
}
