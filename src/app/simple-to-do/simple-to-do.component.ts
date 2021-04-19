import {Component, OnInit} from '@angular/core';
import {MicroAppForm, MicroApplicationFormContent} from 'windows-micro-applications';
import {SimpleToDoTaskEditorComponent} from './simple-to-do-task-editor/simple-to-do-task-editor.component';
import {SimpleToDoService} from './simple-to-do.service';
import {ToDoTask} from '../domain/to-do-task';

@Component({
  selector: 'app-simple-to-do',
  templateUrl: './simple-to-do.component.html',
  styleUrls: ['./simple-to-do.component.css']
})
export class SimpleToDoComponent extends MicroApplicationFormContent implements OnInit {


  constructor(public simpleToDoService: SimpleToDoService) {
    super()
  }

  ngOnInit(): void {
  }

  FormInit(): void {
    this.form.xSize = 700;
  }

  AddTaskBtnClick() {
    this.simpleToDoService.currentTask = null;
    this.EditTaskBtnClick();
  }

  TaskClickHandler(event: ToDoTask) {
    this.simpleToDoService.currentTask = event;
  }

  EditTaskBtnClick() {
    let microApplicationForm = new MicroAppForm(SimpleToDoTaskEditorComponent);
    this.AddChildren(microApplicationForm)
  }

  DeleteTaskBtnClick() {
    let index = this.simpleToDoService.tasks.findIndex(task => task.id === this.simpleToDoService.currentTask.id);
    if (index > -1) {
      this.simpleToDoService.tasks.splice(index, 1);
    }
  }
}
