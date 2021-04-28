import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base.component';
import {ButtonModule} from './button/button.module';
import {SideMenuModule} from './side-menu/side-menu.module';
import {TextInputModule} from './text-input/text-input.module';

@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BaseComponent,
    ButtonModule,
    SideMenuModule,
    TextInputModule,
  ]
})
export class BaseComponentsModule {
}
