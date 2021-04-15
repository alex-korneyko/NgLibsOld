import {DesktopService} from '../desktop.service';
import {MicroApplicationContent} from './micro-application-content';

export class MicroApplicationFormContent implements MicroApplicationContent{

  id: number;

  constructor(public deskTopService: DesktopService) {
  }

  CloseWindow = (windowId: number) => {
    this.deskTopService.CloseWindow(windowId);
  }
}
