import {NgModule, Type} from '@angular/core';
import {TestAccessoryApplicationComponent} from './test-accessory-application.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MicroApplication, MicroApplicationFormContent, MicroApplicationType} from '@nextrium/web-desktop';
import {BaseComponentsModule} from '@nextrium/base-components';

@NgModule({
  declarations: [
    TestAccessoryApplicationComponent
  ],
  imports: [
    BaseComponentsModule,
    CommonModule,
    FormsModule
  ]
})
export class TestAccessoryApplicationModule extends MicroApplication{

  children: Type<MicroApplicationFormContent>[];
  formContentComponent = TestAccessoryApplicationComponent;
  title = "Test accessory";
  type = MicroApplicationType.Accessories;
}
