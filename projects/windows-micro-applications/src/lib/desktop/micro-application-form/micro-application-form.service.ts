import { Injectable } from '@angular/core';
import {MicroApplicationFormSettings} from './micro-application-form-settings';

@Injectable()
export class MicroApplicationFormService {

  formParams: MicroApplicationFormSettings;

  constructor() { }
}
