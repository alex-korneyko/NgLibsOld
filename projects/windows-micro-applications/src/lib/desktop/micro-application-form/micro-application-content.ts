import {MicroAppForm} from './micro-app-form';

export interface MicroApplicationContent {

  form: MicroAppForm

  FormOnInit(): void;
  FormAfterInit(): void;

  FormBeforeDestroy(): void;
  FormAfterDestroy(): void;

  FormBeforeMaximize(): void;
  FormAfterMaximize(): void;

  FormBeforeMinimize(): void;
  FormAfterMinimize(): void;

  FormOnMove(): void;
  FormOnResize(): void;

  AddChildren: (form: MicroAppForm) => void;
  CloseWindow: () => void;
}
