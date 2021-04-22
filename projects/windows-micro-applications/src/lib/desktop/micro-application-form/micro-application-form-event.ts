import {MicroApplicationFormEventType} from './micro-application-form-event-type.enum';
import {MicroAppForm} from './micro-app-form';

export class MicroApplicationFormEvent {
  form: MicroAppForm;
  windowEventType: MicroApplicationFormEventType;
  dragEvent: DragEvent;
  mouseEvent: MouseEvent;


  constructor(form: MicroAppForm, windowEventType?: MicroApplicationFormEventType) {
    this.windowEventType = MicroApplicationFormEventType.NONE;
    this.form = form;
    this.windowEventType = windowEventType;
  }
}
