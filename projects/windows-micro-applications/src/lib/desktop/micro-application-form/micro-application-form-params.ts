import {Type} from '@angular/core';
import {MicroApplicationFormContent} from './micro-application-form-content';

export class MicroApplicationFormParams {
  readonly id: number;
  readonly windowContent: Type<MicroApplicationFormContent>;
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

  constructor(content: Type<MicroApplicationFormContent>, zPos: number) {
    this.created = new Date();
    this.id = this.created.valueOf();
    this.windowContent = content;
    this.zPos = zPos;
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
