import {Type} from '@angular/core';
import {MicroApplicationType} from './micro-application-type.enum';

export interface MicroApplication {
  title?: string;
  formContentComponent?: Type<any>;
  type?: MicroApplicationType;
  children?: MicroApplication[];
}
