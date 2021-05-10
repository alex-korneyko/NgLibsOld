import {IMicroApplicationContainer} from './micrioApplications/i-micro-application-container';
import {IMicroApplication} from './micrioApplications/micro-application';
import {MicroApplicationContainer} from './micrioApplications/micro-application-container';
import {MicroApplicationState} from './micrioApplications/micro-application-state.enum';

export class WebDesktopComon {

  private static _applicationContainers = new Array<IMicroApplicationContainer>();

  static get applicationContainers(): IMicroApplicationContainer[] {
    return this._applicationContainers;
  }

  static PushMicroApplications(apps: IMicroApplication[]) {
    apps.forEach(app => this._applicationContainers.push(new MicroApplicationContainer(app, MicroApplicationState.NotRunning)));
  }
}
