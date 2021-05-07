import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {WebDesktopApplicationsModule} from '@nextrium/web-desktop';
import {TestServiceApplicationComponent} from './test-service-application/test-service-application.component';
import {SimpleToDoComponent} from './simple-to-do/simple-to-do.component';
import { SimpleToDoTaskEditorComponent } from './simple-to-do/simple-to-do-task-editor/simple-to-do-task-editor.component';
import { TaskListItemComponent } from './simple-to-do/task-list-item/task-list-item.component';
import { TaskInfoWindowComponent } from './simple-to-do/task-info-window/task-info-window.component';
import {BaseComponentsModule} from '@nextrium/base-components';
import {TestMicroApplicationModule} from './test-micro-application/test-micro-application.module';
import {ComponentExamplesModule} from './component-examples/component-examples-module';

@NgModule({
  declarations: [
    AppComponent,
    TestServiceApplicationComponent,
    SimpleToDoComponent,
    SimpleToDoTaskEditorComponent,
    TaskListItemComponent,
    TaskInfoWindowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BaseComponentsModule,
    ComponentExamplesModule,
    TestMicroApplicationModule,

    WebDesktopApplicationsModule.microApplications([
      new ComponentExamplesModule(),
      new TestMicroApplicationModule()
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
