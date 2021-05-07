import {Component, OnInit} from '@angular/core';
import {DesktopService} from '../desktop.service';
import {MicroApplications} from '../micrioApplications/micro.applications';
import {MicroApplicationType} from '../micrioApplications/micro-application-type.enum';
import {IMicroApplicationBox} from '../micrioApplications/i-micro-application-box';

@Component({
  selector: 'wma-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  microApplicationBoxes = MicroApplications.applicationBoxes;
  type = MicroApplicationType;

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void { }

  StartApplication(microApplicationBox: IMicroApplicationBox) {
    this.deskTopService.StartApplication(microApplicationBox)
    this.deskTopService.mainMenuIsShown = false;
  }
}
