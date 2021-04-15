import {MicroApplicationFormEventType} from './micro-application-form-event-type.enum';

export class MicroApplicationFormEvent {
  windowId: number;
  windowEventType: MicroApplicationFormEventType;
  dragEvent: DragEvent;
  mouseEvent: MouseEvent;


  constructor(windowId: number, windowEventType: MicroApplicationFormEventType) {
    this.windowEventType = MicroApplicationFormEventType.NONE;
    this.windowId = windowId;
    this.windowEventType = windowEventType;
  }
}
