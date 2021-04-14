import {Component, Input, OnInit, Output, Type, EventEmitter} from '@angular/core';
import {MainMenuItemParam} from './main-menu-item-param';

@Component({
  selector: 'app-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {

  @Input()
  mainMenuItemParam: MainMenuItemParam;

  @Output()
  applicationClickEvent = new EventEmitter<Type<any>>()

  constructor() { }

  ngOnInit(): void {
  }

  ApplicationClick(event: MouseEvent) {
    event.stopPropagation();
    this.applicationClickEvent.emit(this.mainMenuItemParam.application);
  }
}
