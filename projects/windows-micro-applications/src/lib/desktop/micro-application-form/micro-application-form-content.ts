import {MicroApplicationContent} from './micro-application-content';
import {MicroAppForm} from './micro-app-form';

export abstract class MicroApplicationFormContent implements MicroApplicationContent{

  id: number;
  form: MicroAppForm

  CloseWindow = (parent?: MicroAppForm) => {
    this.form.Close(parent);
  }

  AddChildren(form: MicroAppForm): void {
    this.form.AddChildren(form);
  }

  abstract FormInit () ;
}
