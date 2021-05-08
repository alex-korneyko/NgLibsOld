import {Type} from '@angular/core';
import {MicroApplicationType} from './micro-application-type.enum';
import {MicroApplicationFormContent} from '../micro-application-form/micro-application-form-content';

export interface IMicroApplication {
  title: string;
  formContentComponent: Type<MicroApplicationFormContent>;
  type: MicroApplicationType;
  children: Array<Type<MicroApplicationFormContent>>;

  BeforeApplicationStart();

  AfterApplicationStart();

  BeforeApplicationStop();

  AfterApplicationStop();

  BeforeApplicationIdle();

  AfterApplicationIdle();

  BeforeApplicationBackground();

  AfterApplicationBackground();

  BeforeApplicationSleep();

  AfterApplicationSleep();
}

export abstract class MicroApplication implements IMicroApplication {
  abstract title: string;
  abstract formContentComponent: Type<MicroApplicationFormContent>;
  abstract type: MicroApplicationType;
  abstract children = new Array<Type<MicroApplicationFormContent>>();

  public AfterApplicationStart() {
  }

  BeforeApplicationStart() {
  }

  AfterApplicationBackground() {
  }

  AfterApplicationIdle() {
  }

  AfterApplicationSleep() {
  }

  AfterApplicationStop() {
  }

  BeforeApplicationBackground() {
  }

  BeforeApplicationIdle() {
  }

  BeforeApplicationSleep() {
  }

  BeforeApplicationStop() {
  }
}
