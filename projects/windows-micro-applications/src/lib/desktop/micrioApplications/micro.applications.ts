import {IMicroApplicationBox} from './i-micro-application-box';
import {IMicroApplication} from './micro-application';
import {MicroApplicationBox} from './micro-application-box';
import {MicroApplicationState} from './micro-application-state.enum';

export class MicroApplications {
    private static _applicationBoxes = new Array<IMicroApplicationBox>();


  static get applicationBoxes(): IMicroApplicationBox[] {
    return this._applicationBoxes;
  }

  static PushMicroApplications(apps: IMicroApplication[]) {
    apps.forEach(app => this._applicationBoxes.push(new MicroApplicationBox(app, MicroApplicationState.NotRunning)))
  }
}
