import {Component, Input, OnInit} from '@angular/core';
import {MicroApplicationFormParams} from '../../micro-application-form/micro-application-form-params';
import {DesktopService} from '../../desktop.service';

@Component({
  selector: 'wma-task-panel-application-item',
  templateUrl: './task-panel-application-item.component.html',
  styleUrls: ['./task-panel-application-item.component.css']
})
export class TaskPanelApplicationItemComponent implements OnInit {

  @Input()
  microApplicationFormParams: MicroApplicationFormParams

  constructor(public desktopService: DesktopService) { }

  ngOnInit(): void {
  }

  ApplicationItemClick() {
    if (this.microApplicationFormParams.isActive) {
      this.microApplicationFormParams.isActive = false;
      this.microApplicationFormParams.isBackground = true;
      this.desktopService.currentWindow = null;
    } else {
      this.desktopService.ActivateWindow(this.microApplicationFormParams)
    }
  }

}
