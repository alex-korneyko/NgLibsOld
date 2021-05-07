import { Component, OnInit } from '@angular/core';
import {Size} from '@nextrium/base-components';
import {ColorStyle} from '@nextrium/base-components';
import {TitlePosition} from '@nextrium/base-components';
import {TextInputType} from '@nextrium/base-components';

@Component({
  selector: 'app-text-area-example-colors',
  templateUrl: './text-area-example-colors.component.html',
  styleUrls: ['./text-area-example-colors.component.css']
})
export class TextAreaExampleColorsComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;
  inputType = TextInputType;
  text = "";
  textDisabled = "disabled";

  constructor() { }

  ngOnInit(): void {
  }

}
