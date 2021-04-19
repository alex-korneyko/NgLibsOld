import { Injectable } from '@angular/core';
import {ToDoTask} from '../domain/to-do-task';

@Injectable({
  providedIn: 'root'
})
export class SimpleToDoService {

  tasks = new Array<ToDoTask>();
  currentTask: ToDoTask;

  constructor() { }
}
