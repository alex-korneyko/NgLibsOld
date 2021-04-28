import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorStyle} from '../../color-style.enum';
import {Size} from '../../size.enum';
import {TitlePosition} from '../../title-position.enum';


@Component({
  selector: 'bs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [
    './text-input.component.css',
    "../../../styles/bs-variables.css"
  ]
})
export class TextInputComponent implements OnInit {

  @Input()
  title = "Test title"

  @Input()
  color: ColorStyle = ColorStyle.Light

  @Input()
  size: Size;

  @Input()
  titlePosition: TitlePosition = TitlePosition.Left

  @Input()
  width = "max-content";

  @Input()
  bsModel: string;

  @Output()
  bsModelChange = new EventEmitter<string>();

  @Output()
  onChange = new EventEmitter();

  sizeValues = Size;
  colorStyleValues = ColorStyle
  titlePositionValues = TitlePosition;

  constructor() { }

  ngOnInit(): void {
  }

  modelChanged(event: string) {
    this.bsModelChange.emit(event);
    this.onChange.emit();
  }
}
