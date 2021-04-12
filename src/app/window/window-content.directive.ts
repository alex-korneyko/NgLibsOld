import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[windowContent]'
})
export class WindowContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
