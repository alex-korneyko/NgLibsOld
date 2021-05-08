import {NgModule, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SimpleToDoComponent} from './simple-to-do.component';
import {TaskListItemComponent} from './task-list-item/task-list-item.component';
import {SimpleToDoTaskEditorComponent} from './simple-to-do-task-editor/simple-to-do-task-editor.component';
import {TaskInfoWindowComponent} from './task-info-window/task-info-window.component';
import {MicroApplication, MicroApplicationFormContent, MicroApplicationType} from '@nextrium/web-desktop';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SimpleToDoComponent,
    SimpleToDoTaskEditorComponent,
    TaskListItemComponent,
    TaskInfoWindowComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class SimpleToDoModule extends MicroApplication {
    title = "Simple ToDo";
    formContentComponent = SimpleToDoComponent;
    type = MicroApplicationType.Application;
    children = new Array<Type<MicroApplicationFormContent>>(...[TaskInfoWindowComponent, SimpleToDoTaskEditorComponent]);
}
