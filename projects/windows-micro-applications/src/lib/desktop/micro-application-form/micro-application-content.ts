import {MicroAppForm} from './micro-app-form';

export interface MicroApplicationContent {

  id: number;
  form: MicroAppForm

  FormInit: () => void;

  AddChildren: (form: MicroAppForm) => void;
  CloseWindow: (parent?: MicroAppForm) => void;
}
