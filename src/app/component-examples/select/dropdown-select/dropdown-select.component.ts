import { Component, OnInit } from '@angular/core';
import {Size} from '@nextrium/base-components';
import {ColorStyle} from '@nextrium/base-components';
import {TitlePosition} from '@nextrium/base-components';
import {SelectValue} from '@nextrium/base-components';

@Component({
  selector: 'app-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.css']
})
export class DropdownSelectComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;
  object = Object;
  colorsList = new Array<SelectValue>()
  selectedColor = "Red";

  values = [
    new SelectValue("Select value...", true),
    new SelectValue("First").AddPrompt("First element"),
    new SelectValue("Second"),
    new SelectValue("Third"),
    new SelectValue("Fourth")
  ];

  disabledValues = [
    new SelectValue("First").AddPrompt("First element"),
    new SelectValue("Second", true),
    new SelectValue("Third"),
    new SelectValue("Fourth", true)
  ];

  text = "Select value..."

  multiValues = new Array<string>()

  constructor() { }

  ngOnInit(): void {
    this.colorsList.push(...Object.keys(ColorStyle).map(key => new SelectValue(key)))
  }

  selectChangeHandler(event?: string) {
    // this.selectedColor = event;
    // console.log(this.selectedColor)
  }

}
