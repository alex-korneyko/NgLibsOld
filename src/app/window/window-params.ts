import {Type} from '@angular/core';

export class WindowParams {
  private readonly _id: number;
  private readonly _windowContent: Type<any>
  private _xPos: number;
  private _yPos: number;
  private _zPos: number;
  private _xSize: number;
  private _ySize: number;
  private _isFullScreen = false;
  private _isActive: boolean;
  private _isHidden: boolean;

  constructor(xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, content: Type<any>) {
    this._id = new Date().valueOf();
    this._windowContent = content;
    this._xPos = xPos;
    this._yPos = yPos;
    this._zPos = zPos;
    this._xSize = xSize;
    this._ySize = ySize;
    this._isActive = true;
  }

  get id(): number {
    return this._id;
  }

  get xPos(): number {
    return this._xPos;
  }

  set xPos(value: number) {
    this._xPos = value;
  }

  get yPos(): number {
    return this._yPos;
  }

  set yPos(value: number) {
    this._yPos = value;
  }

  get zPos(): number {
    return this._zPos;
  }

  set zPos(value: number) {
    this._zPos = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get isHidden(): boolean {
    return this._isHidden;
  }

  set isHidden(value: boolean) {
    this._isHidden = value;
  }

  get xSize(): number {
    return this._xSize;
  }

  set xSize(value: number) {
    this._xSize = value;
  }

  get ySize(): number {
    return this._ySize;
  }

  set ySize(value: number) {
    this._ySize = value;
  }

  get windowContent(): Type<any> {
    return this._windowContent;
  }

  get isFullScreen(): boolean {
    return this._isFullScreen;
  }

  set isFullScreen(value: boolean) {
    this._isFullScreen = value;
  }
}
