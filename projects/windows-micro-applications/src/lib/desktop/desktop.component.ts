import { Component, OnInit } from '@angular/core';
import {DesktopService} from './desktop.service';
import {MicroApplications} from './micrioApplications/micro.applications';

@Component({
  selector: 'wma-desk-top',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {

  constructor(public desktopService: DesktopService) { }

  ngOnInit(): void {

  }

}
