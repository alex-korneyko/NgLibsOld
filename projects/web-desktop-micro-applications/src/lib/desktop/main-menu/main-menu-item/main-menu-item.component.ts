import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IMicroApplicationBox} from '../../micrioApplications/i-micro-application-box';

@Component({
  selector: 'wma-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {

  @Input()
  iMicroApplicationBox: IMicroApplicationBox;

  @Output()
  applicationClickEvent = new EventEmitter<IMicroApplicationBox>()

  constructor() { }

  ngOnInit(): void {
  }

  ApplicationClick(event: MouseEvent) {
    event.stopPropagation();
    this.applicationClickEvent.emit(this.iMicroApplicationBox);
  }
}
