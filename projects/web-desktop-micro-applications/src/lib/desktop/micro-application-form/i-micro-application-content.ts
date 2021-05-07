import {MicroApplicationFormSettings} from './micro-application-form-settings';

export interface IMicroApplicationContent {

  form: MicroApplicationFormSettings

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

  AddChildren: (form: MicroApplicationFormSettings) => void;
  CloseWindow: () => void;
}
