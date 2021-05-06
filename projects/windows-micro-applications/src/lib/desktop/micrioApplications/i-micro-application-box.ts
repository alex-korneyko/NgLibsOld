import {IMicroApplication} from './micro-application';
import {MicroApplicationState} from './micro-application-state.enum';

export interface IMicroApplicationBox {
  microApplication: IMicroApplication;
  microApplicationState: MicroApplicationState
  autostart: boolean;

  Run();
  Idle();
  BackGround();
  Sleep();
  Stop();
}
