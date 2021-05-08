import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {WebDesktopApplicationsModule} from '@nextrium/web-desktop';
import {BaseComponentsModule} from '@nextrium/base-components';
import {TestMicroApplicationModule} from './test-micro-application/test-micro-application.module';
import {ComponentExamplesModule} from './component-examples/component-examples-module';
import {SimpleToDoModule} from './simple-to-do/simple-to-do-module';
import {TestAccessoryApplicationModule} from './test-service-application/test-accessory-application.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BaseComponentsModule,
    ComponentExamplesModule,
    TestMicroApplicationModule,
    SimpleToDoModule,

    WebDesktopApplicationsModule.microApplications([
      new ComponentExamplesModule(),
      new TestMicroApplicationModule(),
      new SimpleToDoModule(),
      new TestAccessoryApplicationModule()
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
