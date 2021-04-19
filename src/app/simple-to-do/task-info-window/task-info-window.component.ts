import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from '../../../../projects/windows-micro-applications/src/lib/desktop/micro-application-form/micro-application-form-content';

@Component({
  selector: 'app-task-info-window',
  templateUrl: './task-info-window.component.html',
  styleUrls: ['./task-info-window.component.css']
})
export class TaskInfoWindowComponent extends MicroApplicationFormContent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  FormInit() {
  }
}
