import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';
import {ToDoTask} from '../../domain/to-do-task';

@Component({
  selector: 'app-task-info-window',
  templateUrl: './task-info-window.component.html',
  styleUrls: ['./task-info-window.component.css']
})
export class TaskInfoWindowComponent extends MicroApplicationFormContent implements OnInit {
  task: ToDoTask;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  FormOnInit(): void {
    this.form.isSingleton = false;
    this.form.closeIfParentClosed = true;
    this.task = this.form.params.task;
  }
}
