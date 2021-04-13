import {Component, OnInit} from '@angular/core';
import {DeskTopService} from '../desk-top/desk-top.service';
import {TestWindowContentService} from './test-window-content.service';
import {WindowContent} from '../window-content';
import {WindowService} from '../window/window.service';

@Component({
  selector: 'app-test-window-content',
  templateUrl: './test-window-content.component.html',
  styleUrls: ['./test-window-content.component.css'],
  providers: [TestWindowContentService]
})
export class TestWindowContentComponent extends WindowContent implements OnInit {

  constructor(deskTopService: DeskTopService, public windowService: WindowService, public testWindowContentService: TestWindowContentService) {
    super(deskTopService);
  }

  ngOnInit(): void {
  }

  AddWindow() {
    this.deskTopService.AddWindow(TestWindowContentComponent);
  }
}
