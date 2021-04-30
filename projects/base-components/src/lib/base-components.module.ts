import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base.component';
import {ButtonModule} from './button/button.module';
import {SideMenuModule} from './side-menu/side-menu.module';
import {TextInputModule} from './text-input/text-input.module';
import {TextAreaModule} from './text-area/text-area.module';

@NgModule({
  declarations: [
    BaseComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BaseComponent,
    ButtonModule,
    SideMenuModule,
    TextInputModule,
    TextAreaModule,
  ]
})
export class BaseComponentsModule {
}
