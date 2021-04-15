import {Type} from '@angular/core';
import {MicroApplicationFormContent} from './micro-application-form-content';

export class MicroApplicationFormParams {
  readonly id: number;
  readonly windowContent: Type<MicroApplicationFormContent>
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

  constructor(content: Type<MicroApplicationFormContent>, zPos: number) {
    this.id = new Date().valueOf();
    this.windowContent = content;
    this.zPos = zPos;
    this.isActive = true;

    if (this.xSize < this.xMinSize) {
      this.xSize = this.xMinSize;
    }

    if (this.ySize < this.yMinSize) {
      this.ySize = this.yMinSize;
    }
  }
}
