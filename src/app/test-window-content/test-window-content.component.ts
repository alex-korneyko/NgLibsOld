import {Component, OnInit} from '@angular/core';
import {DesktopService} from '../desktop/desktop.service';
import {TestWindowContentService} from './test-window-content.service';
import {MicroApplicationContent} from '../desktop/micro-application-form/micro-application-content';
import {MicroApplicationFormService} from '../desktop/micro-application-form/micro-application-form.service';

@Component({
  selector: 'app-test-window-content',
  templateUrl: './test-window-content.component.html',
  styleUrls: ['./test-window-content.component.css'],
  providers: [TestWindowContentService]
})
export class TestWindowContentComponent extends MicroApplicationContent implements OnInit {

  constructor(deskTopService: DesktopService, public windowService: MicroApplicationFormService, public testWindowContentService: TestWindowContentService) {
    super(deskTopService);
  }

  ngOnInit(): void {
  }

  AddWindow() {
    this.deskTopService.AddWindow(TestWindowContentComponent);
  }
}
