import {DeskTopService} from './desk-top/desk-top.service';
import {IWindowContent} from './window/iwindow-content';

export class WindowContent implements IWindowContent{

  id: number;

  constructor(public deskTopService: DeskTopService) {
  }

  CloseWindow = (windowId: number) => {
    this.deskTopService.CloseWindow(windowId);
  }
}
