import {MicroApplicationContent} from './micro-application-content';
import {MicroAppForm} from './micro-app-form';

export abstract class MicroApplicationFormContent implements MicroApplicationContent {

  form: MicroAppForm

  CloseWindow = () => {
    this.form.formContainer.CloseClick();
  }

  AddChildren(form: MicroAppForm): void {
    if (form.xPos === this.form.xPos && form.yPos === this.form.yPos) {
      form.xPos = this.form.xPos + 30;
      form.yPos = this.form.yPos + 30;
    }
    this.form.AddChildren(form);
  }

  FormOnInit(): void {
  }

  FormAfterInit() {
  }

  FormBeforeDestroy(): void {
  }

  FormAfterDestroy(): void {
  }

  FormBeforeMaximize(): void {
  }

  FormAfterMaximize(): void {
  }

  FormAfterMinimize(): void {
  }

  FormBeforeMinimize(): void {
  }

  FormOnMove(): void {
  }

  FormOnResize(): void {
  }
}
