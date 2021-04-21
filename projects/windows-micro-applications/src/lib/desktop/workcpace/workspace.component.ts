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
  workspaceAreaOnResize = new EventEmitter<any>();

  constructor(public deskTopService: DesktopService) {
  }

  ngOnInit(): void {
    this.deskTopService.windowOnResizeHandlers.push(() => {
      this.workspaceAreaOnResize.emit(this.workspaceArea.nativeElement)
    })

    this.workspaceAreaOnResize.emit(this.workspaceArea.nativeElement)
  }
}
