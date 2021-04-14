import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[windowContent]'
})
export class MicroApplicationFormContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
