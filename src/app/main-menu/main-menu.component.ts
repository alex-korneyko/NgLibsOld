import { Component, OnInit } from '@angular/core';
import {DeskTopService} from '../desk-top/desk-top.service';
import {MainMenuItemParam} from './main-menu-item/main-menu-item-param';
import {TestWindowContentComponent} from '../test-window-content/test-window-content.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems = new Array<MainMenuItemParam>()

  constructor(public deskTopService: DeskTopService) { }

  ngOnInit(): void {
    this.menuItems.push(new MainMenuItemParam("Test window content", this.TestWindowContentCreate))
  }

  TestWindowContentCreate = (event: MouseEvent) => {
    event.stopPropagation();
    this.deskTopService.AddWindow(TestWindowContentComponent)
    this.deskTopService.mainMenuIsShown = false;
  }

}
