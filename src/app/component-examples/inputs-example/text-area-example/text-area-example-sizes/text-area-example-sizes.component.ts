import { Component, OnInit } from '@angular/core';
import {Size} from 'base-components';
import {ColorStyle} from 'base-components';
import {TitlePosition} from 'base-components';
import {TextInputType} from 'base-components';

@Component({
  selector: 'app-text-area-example-sizes',
  templateUrl: './text-area-example-sizes.component.html',
  styleUrls: ['./text-area-example-sizes.component.css']
})
export class TextAreaExampleSizesComponent implements OnInit {

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
