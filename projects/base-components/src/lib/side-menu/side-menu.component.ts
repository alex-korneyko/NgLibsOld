import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SideMenuContainerContentDirective} from './side-menu-container-content.directive';
import {SideMenuItemParam} from './side-menu-item-param';

@Component({
  selector: 'bs-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @ViewChild("sideMenuContainer")
  sideMenuContainer: ElementRef;

  @ViewChild(SideMenuContainerContentDirective, {static: true})
  sideMenuContentHost: SideMenuContainerContentDirective;

  @Input()
  menuItems = new Array<SideMenuItemParam>()

  @Input()
  menuWidth = 150

  selectedMenuItem: SideMenuItemParam;

  separatorDragging = false;

  viewContainerRef: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if (this.menuItems.length > 0) {
      this.selectedMenuItem = this.menuItems[0];
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.menuItems[0].menuItemComponent);
      this.viewContainerRef = this.sideMenuContentHost.viewContainerRef;
      this.viewContainerRef.clear();

      this.viewContainerRef.createComponent(componentFactory);
    }
  }

  SeparatorDragStartHandler(event: DragEvent) {
    this.separatorDragging = true;
    event.dataTransfer.setDragImage(document.createElement('img'), 0, 0);
  }

  SeparatorDragEndHandler(event: DragEvent) {
    this.separatorDragging = false;
  }

  MenuItemClickHandler(sideMenuItemParam: SideMenuItemParam) {
    this.selectedMenuItem = sideMenuItemParam;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(sideMenuItemParam.menuItemComponent);

    this.viewContainerRef.clear();
    this.viewContainerRef.createComponent(componentFactory);
  }

  DragOverLeftSideHandler(event: DragEvent) {
    if (this.separatorDragging) {
      this.menuWidth -= (this.menuWidth - event.offsetX);
    }
  }

  DragOverRightSide(event: DragEvent) {
    if (this.separatorDragging) {
      this.menuWidth += event.offsetX;
    }
  }
}
