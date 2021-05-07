import { Component, OnInit } from '@angular/core';
import {ColorStyle, Size} from '@nextrium/base-components';

@Component({
  selector: 'app-button-colors',
  templateUrl: './button-colors.component.html',
  styleUrls: ['./button-colors.component.css']
})
export class ButtonColorsComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
