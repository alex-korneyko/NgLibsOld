import {Component, Input, OnInit, Output, Type, EventEmitter} from '@angular/core';
import {MainMenuItemParam} from './main-menu-item-param';
import {MicroApplication} from '../../micro-application';

@Component({
  selector: 'wma-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {

  @Input()
  microApplication: MicroApplication;

  @Output()
  applicationClickEvent = new EventEmitter<MicroApplication>()

  constructor() { }

  ngOnInit(): void {
  }

  ApplicationClick(event: MouseEvent) {
    event.stopPropagation();
    this.applicationClickEvent.emit(this.microApplication);
  }
}
