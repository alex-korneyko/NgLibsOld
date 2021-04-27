import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';
import {SideMenuItemParam} from '../../../projects/base-components/src/lib/side-menu/side-menu-item-param';
import {ButtonsExampleComponent} from './buttons-example/buttons-example.component';
import {InputsExampleComponent} from './inputs-example/inputs-example.component';
import {ButtonColorsComponent} from './buttons-example/button-colors/button-colors.component';
import {ButtonOutlineColorsComponent} from './buttons-example/button-outline-colors/button-outline-colors.component';
import {ButtonSizesComponent} from './buttons-example/button-sizes/button-sizes.component';
import {Size} from '../../../projects/base-components/src/lib/size.enum';

@Component({
  selector: 'app-component-examples',
  templateUrl: './component-examples.component.html',
  styleUrls: ['./component-examples.component.css']
})
export class ComponentExamplesComponent extends MicroApplicationFormContent implements OnInit {

  menuItems = new Array<SideMenuItemParam>();

  Size = Size

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.menuItems.push(...[
      new SideMenuItemParam(ButtonsExampleComponent, "Buttons", [
        new SideMenuItemParam(ButtonColorsComponent, "Colors"),
        new SideMenuItemParam(ButtonOutlineColorsComponent, "Outline", [
          new SideMenuItemParam(ButtonColorsComponent, "Inner-2-1"),
          new SideMenuItemParam(ButtonColorsComponent, "Inner-2-2", [
            new SideMenuItemParam(ButtonColorsComponent, "Inner-3-1"),
            new SideMenuItemParam(ButtonColorsComponent, "Inner-3-2")
          ]),
          new SideMenuItemParam(ButtonColorsComponent, "Inner-2-3", [
            new SideMenuItemParam(ButtonColorsComponent, "Inner-3-1"),
            new SideMenuItemParam(ButtonColorsComponent, "Inner-3-2", [
              new SideMenuItemParam(ButtonColorsComponent, "Inner-4-1"),
              new SideMenuItemParam(ButtonColorsComponent, "Inner-4-2")
            ])
          ])
        ]),
        new SideMenuItemParam(ButtonSizesComponent, "Sizes", [
          new SideMenuItemParam(ButtonColorsComponent, "Inner-2-1"),
          new SideMenuItemParam(ButtonColorsComponent, "Inner-2-2", [
            new SideMenuItemParam(ButtonColorsComponent, "Inner-3-1"),
            new SideMenuItemParam(ButtonColorsComponent, "Inner-3-2")
          ]),
          new SideMenuItemParam(ButtonColorsComponent, "Inner-2-3")
        ])
      ]),
      new SideMenuItemParam(InputsExampleComponent, "Inputs")
    ])
  }


  FormOnInit() {
    super.FormOnInit();
    this.form.xSize = 600;
    this.form.ySize = 450;
  }
}
