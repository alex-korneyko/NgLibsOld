import {Component, OnInit} from '@angular/core';
import {DeskTopService} from '../desk-top/desk-top.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  title = 'Workspace';

  constructor(public deskTopService: DeskTopService) { }

  ngOnInit(): void {
  }
}
