import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from 'windows-micro-applications';
import {SideMenuItemParam} from 'base-components';
import {ButtonsExampleComponent} from './buttons-example/buttons-example.component';
import {InputsExampleComponent} from './inputs-example/inputs-example.component';
import {ButtonColorsComponent} from './buttons-example/button-colors/button-colors.component';
import {ButtonOutlineColorsComponent} from './buttons-example/button-outline-colors/button-outline-colors.component';
import {ButtonSizesComponent} from './buttons-example/button-sizes/button-sizes.component';
import {Size} from 'base-components';
import {TextInputsExampleComponent} from './inputs-example/text-inputs-example/text-inputs-example.component';

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
      new SideMenuItemParam("Buttons", ButtonsExampleComponent, [
        new SideMenuItemParam("Colors", ButtonColorsComponent),
        new SideMenuItemParam("Sizes", ButtonSizesComponent)
      ]),
      new SideMenuItemParam("Inputs", InputsExampleComponent, [
        new SideMenuItemParam("Text", TextInputsExampleComponent),
        new SideMenuItemParam("Select", InputsExampleComponent),
        new SideMenuItemParam("Radio", InputsExampleComponent),
        new SideMenuItemParam("Checkbox", InputsExampleComponent),
        new SideMenuItemParam("Range", InputsExampleComponent),
      ])
    ])
  }


  FormOnInit() {
    super.FormOnInit();
    this.form.xSize = 600;
    this.form.ySize = 450;
  }
}
