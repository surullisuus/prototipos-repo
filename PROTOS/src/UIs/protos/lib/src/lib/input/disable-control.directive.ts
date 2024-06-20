import { Directive, Input  } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[subsidiosDisableControl]'
})
export class DisableControlDirective {
  @Input() set subsidiosDisableControl(condition: boolean){
    const action = condition ? 'disable' : 'enable';
    if(this.ngControl.control !== null)
      this.ngControl.control[action]();
  }
  constructor(private ngControl: NgControl) { }

}


