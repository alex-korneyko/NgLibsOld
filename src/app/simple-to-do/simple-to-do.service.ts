import { Injectable } from '@angular/core';
import {ToDoTask} from '../domain/to-do-task';

@Injectable({
  providedIn: 'root'
})
export class SimpleToDoService {

  tasks = new Array<ToDoTask>();
  currentTask: ToDoTask;

  constructor() {
    // this.tasks.push(...[
    //   new ToDoTask("aaa"),
    //   new ToDoTask("bbb"),
    //   new ToDoTask("ccc"),
    //   new ToDoTask("ddd"),
    //   new ToDoTask("eee"),
    //   new ToDoTask("fff"),
    //   new ToDoTask("ggg"),
    // ])
  }
}
