import {IMicroApplicationContent} from './i-micro-application-content';
import {MicroApplicationFormSettings} from './micro-application-form-settings';

export abstract class MicroApplicationFormContent implements IMicroApplicationContent {

  form: MicroApplicationFormSettings

  CloseForm = () => {
    this.form.formContainer.CloseClick();
  }

  OpenChildrenForm(form: MicroApplicationFormSettings): void {
    this.form.children.push(form);
    form.parent = this.form;

    if (form.xPos === this.form.xPos && form.yPos === this.form.yPos) {
      form.xPos = this.form.xPos + 30;
      form.yPos = this.form.yPos + 30;
    }

    this.form.desktopService.AddNewForm(form);
  }

  FormOnInit(): void {
  }

  FormAfterInit() {
  }

  FormOnDestroy(): void {
  }

  FormAfterDestroy(): void {
  }

  FormOnMaximize(): void {
  }

  FormAfterMaximize(): void {
  }

  FormAfterMinimize(): void {
  }

  FormOnMinimize(): void {
  }

  FormOnMove(): void {
  }

  FormOnResize(): void {
  }
}
