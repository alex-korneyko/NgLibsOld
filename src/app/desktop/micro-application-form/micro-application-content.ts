import {DesktopService} from '../desktop.service';
import {IMicroApplicationContent} from './i-micro-application-content';

export class MicroApplicationContent implements IMicroApplicationContent{

  id: number;

  constructor(public deskTopService: DesktopService) {
  }

  CloseWindow = (windowId: number) => {
    this.deskTopService.CloseWindow(windowId);
  }
}
