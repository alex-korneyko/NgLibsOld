import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TitlePosition} from '../../title-position.enum';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';

@Component({
  selector: 'bs-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: [
    './checkbox.component.css',
    '../../../styles/bs-variables.css'
  ]
})
export class CheckboxComponent implements OnInit {

  @Input()
  title = "";

  @Input()
  color: ColorStyle = ColorStyle.SlateGrey

  @Input()
  disabled = false;

  @Input()
  titlePosition: TitlePosition;

  @Input()
  size: Size;

  @Input()
  prompt = "";

  @Input()
  titleWidth = "auto"

  @Input()
  bsModel = false;

  @Output()
  bsModelChange = new EventEmitter<boolean>();

  @Output()
  onChange = new EventEmitter<Event>()

  sizeValues = Size;
  titlePositionValues = TitlePosition;

  constructor() { }

  ngOnInit(): void {
  }

  onModelChange(event: Event) {
    this.bsModelChange.emit(this.bsModel)

    this.onChange.emit(event);
  }

}
