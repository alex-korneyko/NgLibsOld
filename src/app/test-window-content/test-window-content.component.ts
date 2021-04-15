import {Component, OnInit} from '@angular/core';
import {DesktopService} from '../../../projects/windows-micro-applications/src/lib/desktop/desktop.service';
import {TestWindowContentService} from './test-window-content.service';
import {MicroApplicationFormContent} from '../../../projects/windows-micro-applications/src/lib/desktop/micro-application-form/micro-application-form-content';
import {MicroApplicationFormService} from '../../../projects/windows-micro-applications/src/lib/desktop/micro-application-form/micro-application-form.service';

@Component({
  selector: 'app-test-window-content',
  templateUrl: './test-window-content.component.html',
  styleUrls: ['./test-window-content.component.css'],
  providers: [TestWindowContentService]
})
export class TestWindowContentComponent extends MicroApplicationFormContent implements OnInit {

  constructor(deskTopService: DesktopService, public formService: MicroApplicationFormService, public testWindowContentService: TestWindowContentService) {
    super(deskTopService, formService);
  }

  ngOnInit(): void {
    this.formService.formParams.xSize = 600;
    this.formService.formParams.ySize = 500;
  }

  AddWindow() {
    this.deskTopService.AddWindow(TestWindowContentComponent);
  }
}
