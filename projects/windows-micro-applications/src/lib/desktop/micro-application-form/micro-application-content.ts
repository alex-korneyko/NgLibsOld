import {MicroAppForm} from './micro-app-form';

export interface MicroApplicationContent {

  id: number;
  parent: MicroAppForm;
  children: Array<MicroAppForm>;

  AddChildren: (form: MicroAppForm) => void;
  CloseWindow: () => void;
}
