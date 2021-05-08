import {Type} from '@angular/core';
import {MicroApplicationFormContent} from './micro-application-form-content';
import {DesktopService} from '../desktop.service';
import {MicroApplicationFormComponent} from './micro-application-form.component';

export class MicroApplicationFormSettings {
  readonly id: number;
  formContainer: MicroApplicationFormComponent;
  readonly formContent: Type<MicroApplicationFormContent>;
  desktopService: DesktopService;
  params: any;
  readonly children = new Array<MicroApplicationFormSettings>()
  private _parent: MicroApplicationFormSettings;
  closeIfParentClosed = false;
  readonly created: Date;
  xPos = 100;
  yPos = 50;
  zPos: number;
  xMinSize = 450;
  yMinSize = 300;
  xSize = 0;
  ySize = 0;
  allowMaximize = true;
  isMaximized = false;
  private _allowAsWindow = true;
  allowMinimize = true;
  isMinimized = false;
  private _isModal = false;
  private _isResizable = true;
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

    if (!this._allowAsWindow) {
      this.isMaximized = true;
      this.allowMaximize = false;
    }
  }

  get isModal(): boolean {
    return this._isModal;
  }

  set isModal(value: boolean) {
    // this._parent.isBlockedByChildren = value;
    this.desktopService.BlockForm(this._parent);
    this._isModal = value;
  }


  get allowAsWindow(): boolean {
    return this._allowAsWindow;
  }

  set allowAsWindow(value: boolean) {
    this._allowAsWindow = value;
    this.allowMaximize = value;
    this.isMaximized = !value;
  }


  get isResizable(): boolean {
    return this._isResizable;
  }

  set isResizable(value: boolean) {
    this._isResizable = value;
  }


  get parent(): MicroApplicationFormSettings {
    return this._parent;
  }

  set parent(value: MicroApplicationFormSettings) {
    this._parent = value;
  }
}
