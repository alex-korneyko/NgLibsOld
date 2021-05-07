import { Component, OnInit } from '@angular/core';
import {MicroApplicationFormContent} from '@nextrium/web-desktop';

@Component({
  selector: 'app-test-micro-app-main-form',
  templateUrl: './test-micro-app-main-form.component.html',
  styleUrls: ['./test-micro-app-main-form.component.css']
})
export class TestMicroAppMainFormComponent extends MicroApplicationFormContent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  FormOnInit(): void {
    console.log('FormOnInit');
  }

  FormAfterInit() {
    console.log('FormAfterInit');
  }

  FormOnDestroy(): void {
    console.log('FormOnDestroy');
  }

  FormAfterDestroy(): void {
    console.log('FormAfterDestroy');
  }

}
