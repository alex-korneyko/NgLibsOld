import {Component, OnInit} from '@angular/core';
import {DeskTopService} from '../desk-top/desk-top.service';
import {TestWindowContentService} from './test-window-content.service';
import {WindowContent} from '../window-content';

@Component({
  selector: 'app-test-window-content',
  templateUrl: './test-window-content.component.html',
  styleUrls: ['./test-window-content.component.css']
})
export class TestWindowContentComponent extends WindowContent implements OnInit {

  constructor(deskTopService: DeskTopService, public testWindowContentService: TestWindowContentService) {
    super(deskTopService);
  }

  ngOnInit(): void {
  }

  AddWindow() {
    this.deskTopService.AddWindow(TestWindowContentComponent);
  }
}
