import {Message} from './message';
import {ToDoTaskStatus} from './to-do-task-status.enum';

export class ToDoTask {
  id: number;
  name: string
  description: Message;
  taskStatus = ToDoTaskStatus.Ready
  statusComment: string;


  constructor(name: string) {
    this.name = name;
  }
}
