import { Component, OnInit } from '@angular/core';
import {Size, ColorStyle, TitlePosition, TextInputType} from 'base-components';

@Component({
  selector: 'app-text-inputs-example',
  templateUrl: './text-inputs-example.component.html',
  styleUrls: ['./text-inputs-example.component.css']
})
export class TextInputsExampleComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;
  inputType = TextInputType;

  text = "Simple input"
  text2 = "Input with title"
  text3 = "text...";
  text4 = "";
  textNum = 123456;
  textPass = "";
  textLogin = "";
  textDisabled = "Disabled input";

  constructor() { }

  ngOnInit(): void {
  }

}
