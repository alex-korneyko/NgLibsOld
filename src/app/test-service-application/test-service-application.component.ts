import {Component, OnInit} from '@angular/core';
import {MicroApplicationFormContent} from '../../../projects/windows-micro-applications/src/lib/desktop/micro-application-form/micro-application-form-content';
import {DesktopService} from '../../../projects/windows-micro-applications/src/lib/desktop/desktop.service';
import {MicroApplicationFormService} from '../../../projects/windows-micro-applications/src/lib/desktop/micro-application-form/micro-application-form.service';

@Component({
  selector: 'app-test-service-application',
  templateUrl: './test-service-application.component.html',
  styleUrls: ['./test-service-application.component.css'],
  providers: [MicroApplicationFormService]
})
export class TestServiceApplicationComponent extends MicroApplicationFormContent implements OnInit {

  constructor(deskTopService: DesktopService, formService: MicroApplicationFormService) {
    super(deskTopService, formService);
  }

  ngOnInit(): void {
  }

}
