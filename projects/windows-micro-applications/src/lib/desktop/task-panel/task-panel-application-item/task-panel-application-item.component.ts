import {Component, Input, OnInit} from '@angular/core';
import {MicroAppForm} from '../../micro-application-form/micro-app-form';
import {DesktopService} from '../../desktop.service';

@Component({
  selector: 'wma-task-panel-application-item',
  templateUrl: './task-panel-application-item.component.html',
  styleUrls: ['./task-panel-application-item.component.css']
})
export class TaskPanelApplicationItemComponent implements OnInit {

  @Input()
  microApplicationFormParams: MicroAppForm

  constructor(public desktopService: DesktopService) { }

  ngOnInit(): void {
  }

  ApplicationItemClick() {
    if (this.microApplicationFormParams.isBlockedByChildren) {
      return;
    }

    if (this.microApplicationFormParams.isActive && !this.microApplicationFormParams.isModal) {
      this.microApplicationFormParams.isActive = false;
      this.microApplicationFormParams.isBackground = true;
      this.desktopService.activeForm = null;
    } else {
      this.desktopService.ActivateForm(this.microApplicationFormParams);
    }
  }

}
