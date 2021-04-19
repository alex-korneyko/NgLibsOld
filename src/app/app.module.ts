import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MicroApplicationType, WebDesktopApplicationsModule} from 'windows-micro-applications';
import {TestServiceApplicationComponent} from './test-service-application/test-service-application.component';
import {SimpleToDoComponent} from './simple-to-do/simple-to-do.component';
import { SimpleToDoTaskEditorComponent } from './simple-to-do/simple-to-do-task-editor/simple-to-do-task-editor.component';
import { TaskListItemComponent } from './simple-to-do/task-list-item/task-list-item.component';
import { TaskInfoWindowComponent } from './simple-to-do/task-info-window/task-info-window.component';

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
    WebDesktopApplicationsModule.microApplications([
      {title: "Test service", formContentComponent: TestServiceApplicationComponent, type: MicroApplicationType.Service},
      {title: "Simple ToDo", formContentComponent: SimpleToDoComponent, type: MicroApplicationType.Application}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
