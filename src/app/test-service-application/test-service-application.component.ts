import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent, MicroApplicationFormService} from 'windows-micro-applications';
import {Size} from 'base-components';
import {ColorStyle} from '../../../projects/base-components/src/lib/color-style.enum';

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

  FormOnInit(): void {
    this.form.xSize = 600;
    this.form.ySize = 500;
  }

}
