import {MicroAppForm} from './micro-app-form';

export interface MicroApplicationContent {

  id: number;
  form: MicroAppForm

  FormOnInit(): void;

  FormOnDestroy(): void;

  AddChildren: (form: MicroAppForm) => void;
  CloseWindow: (parent?: MicroAppForm) => void;
}
