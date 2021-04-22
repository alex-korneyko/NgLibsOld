import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';
import {ToDoTask} from '../../domain/to-do-task';
import {SimpleToDoService} from '../simple-to-do.service';

@Component({
  selector: 'app-simple-to-do-task-editor',
  templateUrl: './simple-to-do-task-editor.component.html',
  styleUrls: ['./simple-to-do-task-editor.component.css']
})
export class SimpleToDoTaskEditorComponent extends MicroApplicationFormContent implements OnInit {
  constructor(public simpleToDoService: SimpleToDoService) {
    super();
  }

  ngOnInit(): void {
    if (this.simpleToDoService.currentTask == null) {
      this.simpleToDoService.currentTask = new ToDoTask("");
    }
  }

  FormOnInit(): void {
    this.form.header = "Task Editor";
    this.form.isModal = true;
    this.form.xSize = 600
    this.form.allowMinimize = false;
    this.form.allowMaximize = false;
    this.form.isResizable = false;
  }

  OkClick() {
    if (this.simpleToDoService.currentTask.id == null) {
      this.simpleToDoService.currentTask.id = new Date().valueOf();
      this.simpleToDoService.tasks.push(this.simpleToDoService.currentTask);
    }

    this.CancelClick();
  }

  CancelClick() {
    this.simpleToDoService.currentTask = null;
    this.CloseWindow();
  }
}
