import { Component, OnInit } from '@angular/core';
import {DeskTopService} from '../desk-top/desk-top.service';

@Component({
  selector: 'app-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {

  constructor(public deskTopService: DeskTopService) { }

  ngOnInit(): void {
  }

}
