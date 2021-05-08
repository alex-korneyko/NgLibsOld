import {NgModule, Type} from '@angular/core';
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

  children = new Array<Type<MicroApplicationFormContent>>();

  BeforeApplicationStart() {
    console.log("BeforeApplicationStart")
  }

  AfterApplicationStart() {
    console.log("AfterApplicationStart")
  }

  BeforeApplicationStop() {
    console.log("BeforeApplicationStop")
  }

  AfterApplicationStop() {
    console.log("AfterApplicationStop")
  }
}
