import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ToDoTask} from '../../domain/to-do-task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {

  @Input()
  task: ToDoTask

  @Input()
  isSelected = false;

  @Output()
  taskClickEvent = new EventEmitter<ToDoTask>();

  constructor() { }

  ngOnInit(): void {
  }

  TaskClick() {
    this.taskClickEvent.emit(this.task);
  }
}
