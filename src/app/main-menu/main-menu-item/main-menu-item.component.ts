import {Component, Input, OnInit} from '@angular/core';
import {MainMenuItemParam} from './main-menu-item-param';

@Component({
  selector: 'app-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {

  @Input()
  mainMenuItemParam: MainMenuItemParam;

  constructor() { }

  ngOnInit(): void {
  }

}
