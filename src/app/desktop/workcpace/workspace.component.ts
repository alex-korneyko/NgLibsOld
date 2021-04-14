import {Component, OnInit} from '@angular/core';
import {DesktopService} from '../desktop.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  title = 'Workspace';

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void {
  }
}
