import {Type} from '@angular/core';

export interface MicroApplication {
  title?: string;
  microAppForm?: Type<any>;
  children?: MicroApplication[];
}
