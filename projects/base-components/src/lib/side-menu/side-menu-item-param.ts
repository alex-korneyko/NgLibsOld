import {Type} from '@angular/core';

export class SideMenuItemParam {
  menuItemComponent: Type<any>;
  menuItemTitle: string;
  children = new Array<SideMenuItemParam>();

  constructor(menuItemComponent: Type<any>, menuItemTitle: string) {
    this.menuItemComponent = menuItemComponent;
    this.menuItemTitle = menuItemTitle;
  }
}
