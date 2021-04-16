import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';
import {DesktopService} from 'windows-micro-applications';
import {MicroApplicationFormService} from 'windows-micro-applications';

@Component({
  selector: 'app-simple-to-do-task-editor',
  templateUrl: './simple-to-do-task-editor.component.html',
  styleUrls: ['./simple-to-do-task-editor.component.css']
})
export class SimpleToDoTaskEditorComponent extends MicroApplicationFormContent implements OnInit {

  constructor(desktopService: DesktopService, microApplicationFormService: MicroApplicationFormService) {
    super(desktopService, microApplicationFormService);
    microApplicationFormService.formParams.header = "Task editor";
  }

  ngOnInit(): void {
  }

}
