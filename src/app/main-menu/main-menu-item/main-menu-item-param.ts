import {Type} from '@angular/core';

export class MainMenuItemParam {
  title: string;
  application: Type<any>;

  constructor(title: string, application: Type<any>) {
    this.title = title;
    this.application = application;
  }
}
