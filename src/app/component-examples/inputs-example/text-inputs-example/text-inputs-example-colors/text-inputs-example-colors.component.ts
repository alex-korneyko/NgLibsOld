import { Component, OnInit } from '@angular/core';
import {Size, ColorStyle, TitlePosition, TextInputType} from 'base-components';

@Component({
  selector: 'app-text-inputs-examle-colors',
  templateUrl: './text-inputs-example-colors.component.html',
  styleUrls: ['./text-inputs-example-colors.component.css']
})
export class TextInputsExampleColorsComponent implements OnInit {

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
