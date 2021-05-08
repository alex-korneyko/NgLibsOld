import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormSettings, MicroApplicationFormContent} from '@nextrium/web-desktop';
import {SimpleToDoTaskEditorComponent} from './simple-to-do-task-editor/simple-to-do-task-editor.component';
import {SimpleToDoService} from './simple-to-do.service';
import {ToDoTask} from '../domain/to-do-task';
import {TaskInfoWindowComponent} from './task-info-window/task-info-window.component';

@Component({
  selector: 'app-simple-to-do',
  templateUrl: './simple-to-do.component.html',
  styleUrls: ['./simple-to-do.component.css']
})
export class SimpleToDoComponent extends MicroApplicationFormContent implements OnInit {

  constructor(public simpleToDoService: SimpleToDoService) {
    super()
  }

  ngOnInit(): void { }

  FormOnInit(): void {
    this.form.xSize = 700;
  }

  AddTaskBtnClick() {
    this.simpleToDoService.currentTask = null;
    this.EditTaskBtnClick();
  }

  EditTaskBtnClick() {
    let microApplicationForm = new MicroApplicationFormSettings(SimpleToDoTaskEditorComponent);
    // microApplicationForm.isModal = true;
    this.OpenChildrenForm(microApplicationForm)
  }

  TaskClickHandler(event: ToDoTask) {
    this.simpleToDoService.currentTask = event;
  }

  DeleteTaskBtnClick() {
    let index = this.simpleToDoService.tasks.findIndex(task => task.id === this.simpleToDoService.currentTask.id);
    if (index > -1) {
      this.simpleToDoService.tasks.splice(index, 1);
    }

    index = this.form.children.findIndex(form => form.params?.task.id === this.simpleToDoService.currentTask.id);
    if (index > -1) {
      this.form.children[index].formContainer.CloseClick();
    }
  }

  TaskDoubleClickHandler(task: ToDoTask) {
    let microApplicationFormSettings = new MicroApplicationFormSettings(TaskInfoWindowComponent, {
      task,

    });
    microApplicationFormSettings.header = this.simpleToDoService.currentTask.name;
    this.OpenChildrenForm(microApplicationFormSettings)
  }
}
