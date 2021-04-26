import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {SideMenuItemParam} from '../side-menu-item-param';

@Component({
  selector: 'bs-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent implements OnInit {

  @Input()
  menuItem: SideMenuItemParam;

  @Input()
  isSelected: boolean;

  @Output()
  menuItemClick = new EventEmitter<SideMenuItemParam>();

  constructor() { }

  ngOnInit(): void {
  }

  MenuItemClickHandler() {
    this.menuItemClick.emit(this.menuItem);
  }
}
