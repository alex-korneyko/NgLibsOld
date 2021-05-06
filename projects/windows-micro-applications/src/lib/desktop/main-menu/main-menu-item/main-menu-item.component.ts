import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IMicroApplication} from '../../micro-application';

@Component({
  selector: 'wma-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {

  @Input()
  microApplication: IMicroApplication;

  @Output()
  applicationClickEvent = new EventEmitter<IMicroApplication>()

  constructor() { }

  ngOnInit(): void {
  }

  ApplicationClick(event: MouseEvent) {
    event.stopPropagation();
    this.applicationClickEvent.emit(this.microApplication);
  }
}
