import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableControlDirective } from '../input/disable-control.directive';
import { InputComponent } from '../input/input.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [  DisableControlDirective,
       InputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    InputComponent,
  
  ]
})
export class UisModule { }
