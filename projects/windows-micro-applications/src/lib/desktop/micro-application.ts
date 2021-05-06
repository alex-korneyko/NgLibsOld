import {Type} from '@angular/core';
import {MicroApplicationType} from './micro-application-type.enum';
import {MicroApplicationFormContent} from './micro-application-form/micro-application-form-content';

export interface IMicroApplication {
  title?: string;
  formContentComponent?: Type<MicroApplicationFormContent>;
  type?: MicroApplicationType;
  children?: MicroApplicationFormContent[];

  BeforeApplicationStart?();
  AfterApplicationStart?();
}

export abstract class MicroApplication implements IMicroApplication {
  abstract title?: string;
  abstract formContentComponent?: Type<MicroApplicationFormContent>;
  abstract type?: MicroApplicationType;
  abstract children?: MicroApplicationFormContent[];

  AfterApplicationStart() {
  }

  BeforeApplicationStart() {
  }
}
