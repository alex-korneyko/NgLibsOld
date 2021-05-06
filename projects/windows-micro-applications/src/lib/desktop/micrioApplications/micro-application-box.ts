import {IMicroApplicationBox} from './i-micro-application-box';
import {IMicroApplication} from './micro-application';
import {MicroApplicationState} from './micro-application-state.enum';

export class MicroApplicationBox implements IMicroApplicationBox{

  autostart = false;
  microApplication: IMicroApplication;
  microApplicationState: MicroApplicationState;

  constructor(microApplication: IMicroApplication, microApplicationState: MicroApplicationState) {
    this.microApplication = microApplication;
    this.microApplicationState = microApplicationState;
  }

  BackGround() {
    this.microApplicationState = MicroApplicationState.Background;
  }

  Idle() {
    this.microApplicationState = MicroApplicationState.Idle;
  }

  Run() {
    this.microApplicationState = MicroApplicationState.Running;
  }

  Sleep() {
    this.microApplicationState = MicroApplicationState.Sleep;
  }

  Stop() {
    this.microApplication.BeforeApplicationStop();
    this.microApplicationState = MicroApplicationState.NotRunning;
    this.microApplication.AfterApplicationStop();
  }
}
