import {MicroApplicationFormEventType} from './micro-application-form-event-type.enum';
import {MicroApplicationFormSettings} from './micro-application-form-settings';

export class MicroApplicationFormEvent {
  form: MicroApplicationFormSettings;
  windowEventType: MicroApplicationFormEventType;
  dragEvent: DragEvent;
  mouseEvent: MouseEvent;


  constructor(form: MicroApplicationFormSettings, windowEventType?: MicroApplicationFormEventType) {
    this.windowEventType = MicroApplicationFormEventType.NONE;
    this.form = form;
    this.windowEventType = windowEventType;
  }
}
