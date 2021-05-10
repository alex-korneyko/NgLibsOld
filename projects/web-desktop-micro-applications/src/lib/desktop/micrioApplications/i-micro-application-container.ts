import {IMicroApplication} from './micro-application';
import {MicroApplicationState} from './micro-application-state.enum';

export interface IMicroApplicationContainer {
  microApplication: IMicroApplication;
  microApplicationState: MicroApplicationState
  autostart: boolean;

  Run();
  Idle();
  BackGround();
  Sleep();
  Stop();
}
