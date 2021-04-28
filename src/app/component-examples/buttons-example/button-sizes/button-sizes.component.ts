import { Component, OnInit } from '@angular/core';
import {ColorStyle, Size} from 'base-components';

@Component({
  selector: 'app-button-sizes',
  templateUrl: './button-sizes.component.html',
  styleUrls: ['./button-sizes.component.css']
})
export class ButtonSizesComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
