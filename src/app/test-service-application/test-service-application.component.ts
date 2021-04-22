import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent, MicroApplicationFormService} from 'windows-micro-applications';

@Component({
  selector: 'app-test-service-application',
  templateUrl: './test-service-application.component.html',
  styleUrls: ['./test-service-application.component.css'],
  providers: [MicroApplicationFormService]
})
export class TestServiceApplicationComponent extends MicroApplicationFormContent implements OnInit {
  ngOnInit(): void {
  }

  FormOnInit(): void {
    this.form.xSize = 850;
  }

  FormOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}