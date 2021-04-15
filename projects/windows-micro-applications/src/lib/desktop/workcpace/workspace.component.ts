import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {DesktopService} from '../desktop.service';

@Component({
  selector: 'wma-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  title = 'Workspace';

  @ViewChild("WorkSpace", {static: true})
  workspaceArea: ElementRef

  @Output()
  workspaceAreaOnresize = new EventEmitter<any>();

  constructor(public deskTopService: DesktopService) {
  }

  ngOnInit(): void {
    this.workspaceAreaOnresize.emit(this.workspaceArea.nativeElement)

    window.onresize = () => {
      this.workspaceAreaOnresize.emit(this.workspaceArea.nativeElement)
    };
  }
}
