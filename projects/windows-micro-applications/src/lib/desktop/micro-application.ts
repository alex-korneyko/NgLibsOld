import {Type} from '@angular/core';
import {MicroApplicationType} from './micro-application-type.enum';

export interface MicroApplication {
  title?: string;
  microAppForm?: Type<any>;
  type?: MicroApplicationType;
  children?: MicroApplication[];
}
