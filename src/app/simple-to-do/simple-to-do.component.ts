import { Component, OnInit } from '@angular/core';
import {DesktopService, MicroApplicationFormContent} from 'windows-micro-applications';
import {SimpleToDoTaskEditorComponent} from './simple-to-do-task-editor/simple-to-do-task-editor.component';
import {MicroAppForm} from 'windows-micro-applications';

@Component({
  selector: 'app-simple-to-do',
  templateUrl: './simple-to-do.component.html',
  styleUrls: ['./simple-to-do.component.css']
})
export class SimpleToDoComponent extends MicroApplicationFormContent implements OnInit {

  constructor(private desktopService: DesktopService) {
    super();
  }

  ngOnInit(): void {
  }

  AddTaskBtnClick() {
    let microApplicationForm = new MicroAppForm(SimpleToDoTaskEditorComponent, this.desktopService);
    this.AddChildren(microApplicationForm)
  }

  CloseAppBtnClick() {
    this.CloseWindow();
  }

  FormInit(): void {
    this.form.xSize = 700;
  }
}
