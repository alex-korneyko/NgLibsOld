import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from '@nextrium/web-desktop';
import {SideMenuItemParam} from '@nextrium/base-components';
import {ButtonsExampleComponent} from './buttons-example/buttons-example.component';
import {InputsExampleComponent} from './inputs-example/inputs-example.component';
import {ButtonColorsComponent} from './buttons-example/button-colors/button-colors.component';
import {ButtonSizesComponent} from './buttons-example/button-sizes/button-sizes.component';
import {Size} from '@nextrium/base-components';
import {TextInputsExampleComponent} from './inputs-example/text-inputs-example/text-inputs-example.component';
import {TextInputsExampleSizesComponent} from './inputs-example/text-inputs-example/text-inputs-example-sizes/text-inputs-example-sizes.component';
import {TextInputsExampleColorsComponent} from './inputs-example/text-inputs-example/text-inputs-example-colors/text-inputs-example-colors.component';
import {TextAreaExampleSizesComponent} from './inputs-example/text-area-example/text-area-example-sizes/text-area-example-sizes.component';
import {TextAreaExampleColorsComponent} from './inputs-example/text-area-example/text-area-example-colors/text-area-example-colors.component';
import {TextAreaExampleComponent} from './inputs-example/text-area-example/text-area-example.component';
import {DropdownSelectComponent} from './select/dropdown-select/dropdown-select.component';
import {MultiSelectComponent} from './select/multi-select/multi-select.component';

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
        new SideMenuItemParam("Text", TextInputsExampleComponent, [
          new SideMenuItemParam("Sizes", TextInputsExampleSizesComponent),
          new SideMenuItemParam("Colors", TextInputsExampleColorsComponent)
        ]),
        new SideMenuItemParam("Text area", TextAreaExampleComponent, [
          new SideMenuItemParam("Sizes", TextAreaExampleSizesComponent),
          new SideMenuItemParam("Colors", TextAreaExampleColorsComponent)
        ]),
        new SideMenuItemParam("Select", InputsExampleComponent, [
          new SideMenuItemParam("Dropdown select", DropdownSelectComponent),
          new SideMenuItemParam("Multiple select", MultiSelectComponent)
        ]),
        new SideMenuItemParam("Radio", InputsExampleComponent),
        new SideMenuItemParam("Checkbox", InputsExampleComponent),
        new SideMenuItemParam("Range", InputsExampleComponent),
      ])
    ])
  }


  FormOnInit() {
    super.FormOnInit();
    this.form.xSize = 1000;
    this.form.ySize = 600;
  }
}
