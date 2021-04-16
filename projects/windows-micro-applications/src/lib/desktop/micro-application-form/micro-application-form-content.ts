import {DesktopService} from '../desktop.service';
import {MicroApplicationContent} from './micro-application-content';
import {MicroApplicationFormService} from './micro-application-form.service';
import {MicroAppForm} from './micro-app-form';

export abstract class MicroApplicationFormContent implements MicroApplicationContent{

  id: number;
  children = new Array<MicroAppForm>();
  parent: MicroAppForm;

  protected constructor(public deskTopService: DesktopService, public formService: MicroApplicationFormService) {
  }

  CloseWindow = () => {

    this.deskTopService.CloseApplication(this.id);

  }

  AddChildren(form: MicroAppForm): void {
    this.children.push(form);
    this.deskTopService.AddNewForm(form);
  }

}
