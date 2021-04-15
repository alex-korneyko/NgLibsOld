import {Component, OnInit, Type} from '@angular/core';
import {DesktopService} from '../desktop.service';
import {MainMenuItemParam} from './main-menu-item/main-menu-item-param';
import {MicroApplications} from '../micro.applications';
import {MicroApplication} from '../micro-application';

@Component({
  selector: 'wma-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems = new Array<MainMenuItemParam>()
  microApplications = MicroApplications.applications;

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void { }

  StartApplication(microApplication: MicroApplication) {
    this.deskTopService.AddWindow(microApplication)
    this.deskTopService.mainMenuIsShown = false;
  }
}
