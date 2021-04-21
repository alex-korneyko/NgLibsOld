import {MicroAppForm} from './micro-app-form';

export interface MicroApplicationContent {

  id: number;
  form: MicroAppForm

  FormOnInit(): void;

  FormBeforeDestroy(): void;
  FormAfterDestroy(): void;

  FormBeforeMaximize(): void;
  FormAfterMaximize(): void;

  FormBeforeMinimize(): void;
  FormAfterMinimize(): void;

  FormOnMove(): void;
  FormOnResize(): void;

  AddChildren: (form: MicroAppForm) => void;
  CloseWindow: (parent?: MicroAppForm) => void;
}
