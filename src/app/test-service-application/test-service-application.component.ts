import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent, MicroApplicationFormService} from 'windows-micro-applications';
import {Size} from 'base-components';
import {ColorStyle} from 'base-components';
import {TitlePosition} from 'base-components';
import {SelectValue} from 'base-components';

@Component({
  selector: 'app-test-service-application',
  templateUrl: './test-service-application.component.html',
  styleUrls: ['./test-service-application.component.css'],
  providers: [MicroApplicationFormService]
})
export class TestServiceApplicationComponent extends MicroApplicationFormContent implements OnInit {

  componentSize = Size;
  color = ColorStyle;
  titlePosition = TitlePosition;

  values = [
    new SelectValue("Select value...", true),
    new SelectValue("First").AddPrompt("First element"),
    new SelectValue("Second"),
    new SelectValue("Third"),
    new SelectValue("Fourth")]

  text = "Select value..."

  multiValues = new Array<string>()

  ngOnInit(): void {

  }

  FormOnInit(): void {
    this.form.xSize = 1000;
    this.form.ySize = 500;
  }

  selectChangeHandler(event?: string) {
    // console.log(this.text)
    console.log("multiValues: ", this.multiValues)
  }
}
