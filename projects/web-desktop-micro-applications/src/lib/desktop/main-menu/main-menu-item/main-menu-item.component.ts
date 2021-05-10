import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {IMicroApplicationContainer} from '../../micrioApplications/i-micro-application-container';

@Component({
  selector: 'wma-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrls: ['./main-menu-item.component.css']
})
export class MainMenuItemComponent implements OnInit {

  @Input()
  iMicroApplicationBox: IMicroApplicationContainer;

  @Output()
  applicationClickEvent = new EventEmitter<IMicroApplicationContainer>()

  constructor() { }

  ngOnInit(): void {
  }

  ApplicationClick(event: MouseEvent) {
    event.stopPropagation();
    this.applicationClickEvent.emit(this.iMicroApplicationBox);
  }
}
