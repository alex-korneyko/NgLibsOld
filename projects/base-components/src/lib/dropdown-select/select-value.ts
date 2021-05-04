export class SelectValue {

  text: string;
  disabled = false;

  constructor(text: string, disabled = false) {

    this.text = text;
    this.disabled = disabled;
  }
}
