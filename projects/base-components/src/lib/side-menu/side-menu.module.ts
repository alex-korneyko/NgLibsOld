import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from './side-menu.component';
import {SideMenuItemComponent} from './side-menu-item/side-menu-item.component';
import { SideMenuContainerContentDirective } from './side-menu-container-content.directive';



@NgModule({
  declarations: [
    SideMenuComponent,
    SideMenuItemComponent,
    SideMenuContainerContentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
