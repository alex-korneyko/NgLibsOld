import {Component, ElementRef, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {DesktopService} from '../desktop.service';

@Component({
  selector: 'wma-task-panel',
  templateUrl: './task-panel.component.html',
  styleUrls: ['./task-panel.component.css']
})
export class TaskPanelComponent implements OnInit {

  @ViewChild("taskPanelArea", {static: true})
  taskPanelArea: ElementRef;

  @Output()
  taskPanelAreaOnResize = new EventEmitter<any>();

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void {
    this.deskTopService.windowOnResizeHandlers.push(() => {
      this.taskPanelAreaOnResize.emit(this.taskPanelArea.nativeElement);
    })

    this.taskPanelAreaOnResize.emit(this.taskPanelArea.nativeElement);
  }

}
