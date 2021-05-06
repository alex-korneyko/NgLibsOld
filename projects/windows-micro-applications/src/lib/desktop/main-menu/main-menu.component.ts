import {Component, OnInit} from '@angular/core';
import {DesktopService} from '../desktop.service';
import {MicroApplications} from '../micro.applications';
import {IMicroApplication} from '../micro-application';
import {MicroApplicationType} from '../micro-application-type.enum';

@Component({
  selector: 'wma-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  microApplications = MicroApplications.applications;
  type = MicroApplicationType;

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void { }

  StartApplication(microApplication: IMicroApplication) {
    this.deskTopService.StartApplication(microApplication)
    this.deskTopService.mainMenuIsShown = false;
  }
}
