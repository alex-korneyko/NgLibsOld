import { Component, OnInit } from '@angular/core';
import {DesktopService} from '../desktop.service';

@Component({
  selector: 'wma-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void {
  }

}
