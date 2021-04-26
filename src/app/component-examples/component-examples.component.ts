import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';
import {SideMenuItemParam} from '../../../projects/base-components/src/lib/side-menu/side-menu-item-param';
import {ButtonsExampleComponent} from './buttons-example/buttons-example.component';
import {InputsExampleComponent} from './inputs-example/inputs-example.component';

@Component({
  selector: 'app-component-examples',
  templateUrl: './component-examples.component.html',
  styleUrls: ['./component-examples.component.css']
})
export class ComponentExamplesComponent extends MicroApplicationFormContent implements OnInit {

  menuItems = new Array<SideMenuItemParam>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.menuItems.push(...[
      new SideMenuItemParam(ButtonsExampleComponent, "Buttons"),
      new SideMenuItemParam(InputsExampleComponent, "Inputs")
    ])
  }


  FormOnInit() {
    super.FormOnInit();
    this.form.xSize = 600;
    this.form.ySize = 450;
  }
}
