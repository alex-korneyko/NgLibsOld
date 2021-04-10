export class WindowParams {
  private readonly _id: number;
  private _xPos: number;
  private _yPos: number;
  private _zPos: number;
  private _xSize: number;
  private _ySize: number;
  private _isActive: boolean;
  private _isHidden: boolean;

  constructor(x: number, y: number, z: number, xSize: number, ySize: number) {
    this._id = new Date().valueOf();
    this._xPos = x;
    this._yPos = y;
    this._zPos = z;
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
}
