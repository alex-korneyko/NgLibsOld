import { Injectable } from '@angular/core';
import {MicroApplicationFormParams} from './micro-application-form-params';

@Injectable()
export class MicroApplicationFormService {

  formParams: MicroApplicationFormParams;

  constructor() { }

  winServiceData = "WinService"
}
