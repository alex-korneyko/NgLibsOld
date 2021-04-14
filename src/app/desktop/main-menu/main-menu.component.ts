import {Component, OnInit, Type} from '@angular/core';
import {DesktopService} from '../desktop.service';
import {MainMenuItemParam} from './main-menu-item/main-menu-item-param';
import {MicroApplications} from '../web-desktop-applications/micro.applications';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems = new Array<MainMenuItemParam>()

  constructor(public deskTopService: DesktopService) { }

  ngOnInit(): void {
    MicroApplications.applications.forEach(app => {
      this.menuItems.push(new MainMenuItemParam(app.title, app.microAppForm))
    })
  }

  StartApplication(event: Type<any>) {
    this.deskTopService.AddWindow(event)
    this.deskTopService.mainMenuIsShown = false;
  }
}
