import {DesktopService} from '../desktop.service';
import {MicroApplicationContent} from './micro-application-content';
import {MicroApplicationFormService} from './micro-application-form.service';

export abstract class MicroApplicationFormContent implements MicroApplicationContent{

  id: number;

  protected constructor(public deskTopService: DesktopService, public formService: MicroApplicationFormService) {
  }

  CloseWindow = (windowId: number) => {
    this.deskTopService.CloseWindow(windowId);
  }
}
