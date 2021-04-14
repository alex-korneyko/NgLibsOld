import { Component, OnInit } from '@angular/core';
import {DesktopService} from '../desktop.service';
import {TestWindowContentComponent} from '../../test-window-content/test-window-content.component';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {

  testWindow = TestWindowContentComponent;

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void {
  }

}
