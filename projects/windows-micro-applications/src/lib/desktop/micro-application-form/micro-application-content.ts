import {MicroAppForm} from './micro-app-form';

export interface MicroApplicationContent {

  form: MicroAppForm

  FormOnInit(): void;
  FormAfterInit(): void;

  FormOnDestroy(): void;
  FormAfterDestroy(): void;

  FormOnMaximize(): void;
  FormAfterMaximize(): void;

  FormOnMinimize(): void;
  FormAfterMinimize(): void;

  FormOnMove(): void;
  FormOnResize(): void;

  AddChildren: (form: MicroAppForm) => void;
  CloseWindow: () => void;
}
