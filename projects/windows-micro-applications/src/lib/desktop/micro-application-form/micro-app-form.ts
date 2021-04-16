import {Type} from '@angular/core';
import {MicroApplicationFormContent} from './micro-application-form-content';

export class MicroAppForm {
  readonly id: number;
  readonly formContent: Type<MicroApplicationFormContent>;
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
  isModal = false;
  isBackground = false;
  isActive: boolean;
  isHidden: boolean;
  isSingleton: boolean;
  header: string;

  constructor(content: Type<MicroApplicationFormContent>) {
    this.created = new Date();
    this.id = this.created.valueOf();
    this.formContent = content;
    this.isActive = true;
    this.isSingleton = true;

    if (this.xSize < this.xMinSize) {
      this.xSize = this.xMinSize;
    }

    if (this.ySize < this.yMinSize) {
      this.ySize = this.yMinSize;
    }
  }
}
