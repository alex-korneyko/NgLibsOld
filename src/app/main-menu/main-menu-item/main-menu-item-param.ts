export class MainMenuItemParam {
  title: string;
  action: (event: MouseEvent) => void;

  constructor(title: string, action: (event: MouseEvent) => void) {
    this.title = title;
    this.action = action;
  }
}
