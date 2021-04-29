import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent, MicroApplicationFormService} from 'windows-micro-applications';
import {Size} from 'base-components';
import {ColorStyle} from 'base-components';
import {TitlePosition} from 'base-components';
import {TextInputType} from 'base-components';

@Component({
  selector: 'app-test-service-application',
  templateUrl: './test-service-application.component.html',
  styleUrls: ['./test-service-application.component.css'],
  providers: [MicroApplicationFormService]
})
export class TestServiceApplicationComponent extends MicroApplicationFormContent implements OnInit {
  ngOnInit(): void {
  }

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;
  inputType = TextInputType;

  text = "Test text"

  FormOnInit(): void {
    this.form.xSize = 600;
    this.form.ySize = 500;
  }
}
