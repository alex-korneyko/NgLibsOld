import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent, MicroApplicationFormService} from '@nextrium/web-desktop';
import {Size, ColorStyle, TitlePosition, SelectValue} from '@nextrium/base-components';

@Component({
  selector: 'app-test-service-application',
  templateUrl: './test-accessory-application.component.html',
  styleUrls: ['./test-accessory-application.component.css'],
  providers: [MicroApplicationFormService]
})
export class TestAccessoryApplicationComponent extends MicroApplicationFormContent implements OnInit {

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

  checkboxValue = true;

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

  CheckBoxOnChangeHandler(event: Event) {
    console.log('Checkbox: ' + this.checkboxValue);
  }
}
