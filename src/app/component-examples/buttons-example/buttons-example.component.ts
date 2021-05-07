import { Component, OnInit } from '@angular/core';
import {Size, ColorStyle} from '@nextrium/base-components';

@Component({
  selector: 'app-buttons-example',
  templateUrl: './buttons-example.component.html',
  styleUrls: ['./buttons-example.component.css']
})
export class ButtonsExampleComponent implements OnInit {

  componentSize = Size;
  color = ColorStyle;

  constructor() { }

  ngOnInit(): void {
  }

}
