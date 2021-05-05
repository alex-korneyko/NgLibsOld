import { Component, OnInit } from '@angular/core';
import {Size} from 'base-components';
import {ColorStyle} from 'base-components';
import {TitlePosition} from 'base-components';
import {SelectValue} from 'base-components';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;
  object = Object;
  colorsList = new Array<SelectValue>()
  selectedColor = "Red";

  values = [
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

  multiValues = new Array<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
