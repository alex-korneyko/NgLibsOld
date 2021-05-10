import {Component, OnInit} from '@angular/core';
import {WebDesktopCoreService} from '../web-desktop-core.service';
import {WebDesktopComon} from '../web-desktop-comon';
import {MicroApplicationType} from '../micrioApplications/micro-application-type.enum';
import {IMicroApplicationContainer} from '../micrioApplications/i-micro-application-container';

@Component({
  selector: 'wma-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  microApplicationBoxes = WebDesktopComon.applicationContainers;
  type = MicroApplicationType;

  constructor(public deskTopService: WebDesktopCoreService) { }

  ngOnInit(): void { }

  StartApplication(microApplicationBox: IMicroApplicationContainer) {
    this.deskTopService.StartApplication(microApplicationBox)
    this.deskTopService.mainMenuIsShown = false;
  }
}
