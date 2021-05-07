import { Component, OnInit } from '@angular/core';
import {Size, ColorStyle, TitlePosition, TextInputType} from '@nextrium/base-components';

@Component({
  selector: 'app-text-inputs-example-sizes',
  templateUrl: './text-inputs-example-sizes.component.html',
  styleUrls: ['./text-inputs-example-sizes.component.css']
})
export class TextInputsExampleSizesComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;
  inputType = TextInputType;
  text = "";

  constructor() { }

  ngOnInit(): void {
  }

}
