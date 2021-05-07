import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMicroAppMainFormComponent } from './test-micro-app-main-form/test-micro-app-main-form.component';
import {MicroApplication} from '@nextrium/web-desktop';
import {MicroApplicationFormContent} from '@nextrium/web-desktop';
import {MicroApplicationType} from '@nextrium/web-desktop';

@NgModule({
  declarations: [
    TestMicroAppMainFormComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class TestMicroApplicationModule extends MicroApplication{

  title = "Test Application";

  formContentComponent = TestMicroAppMainFormComponent;

  type = MicroApplicationType.Application;

  children = new Array<MicroApplicationFormContent>();

  AfterApplicationStart() {
    console.log("AfterApplicationStart")
  }

  BeforeApplicationStart() {
    console.log("BeforeApplicationStart")
  }

  BeforeApplicationSleep() {
    console.log("BeforeApplicationSleep")
  }

  BeforeApplicationStop() {
    console.log("BeforeApplicationStop")
  }
}
