import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';

@Component({
  selector: 'app-simple-to-do-task-editor',
  templateUrl: './simple-to-do-task-editor.component.html',
  styleUrls: ['./simple-to-do-task-editor.component.css']
})
export class SimpleToDoTaskEditorComponent extends MicroApplicationFormContent implements OnInit {

  ngOnInit(): void {
  }

  FormInit(): void {
    this.form.header = "Task Editor";
    this.form.closeWithParent = true;
    this.form.xSize = 600
  }

}
