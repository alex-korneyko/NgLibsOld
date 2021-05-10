import {Component, Input, OnInit} from '@angular/core';
import {MicroApplicationFormSettings} from '../../micro-application-form/micro-application-form-settings';
import {WebDesktopCoreService} from '../../web-desktop-core.service';

@Component({
  selector: 'wma-task-panel-application-item',
  templateUrl: './task-panel-application-item.component.html',
  styleUrls: ['./task-panel-application-item.component.css']
})
export class TaskPanelApplicationItemComponent implements OnInit {

  @Input()
  microApplicationFormParams: MicroApplicationFormSettings

  constructor(public desktopService: WebDesktopCoreService) { }

  ngOnInit(): void {
  }

  ApplicationItemClick() {
    if (this.microApplicationFormParams.isBlockedByChildren) {
      return;
    }

    if (this.microApplicationFormParams.isActive && !this.microApplicationFormParams.isModal) {
      this.microApplicationFormParams.isActive = false;
      this.microApplicationFormParams.isMinimized = true;
      this.desktopService.activeForm = null;
    } else {
      this.desktopService.ActivateForm(this.microApplicationFormParams);
    }
  }

}
