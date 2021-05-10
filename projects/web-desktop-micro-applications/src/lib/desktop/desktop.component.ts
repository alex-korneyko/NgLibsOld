import { Component, OnInit } from '@angular/core';
import {WebDesktopCoreService} from './web-desktop-core.service';

@Component({
  selector: 'wma-desk-top',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  constructor(public desktopService: WebDesktopCoreService) { }

  ngOnInit(): void {

  }

}
