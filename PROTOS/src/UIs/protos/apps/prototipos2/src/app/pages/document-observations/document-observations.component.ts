import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UisModule } from "../../../../../../lib/src/lib/uis/uis.module";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface ObservationRequest{
  fecha: Date;
  asociadoPor: string;
  observacion: string;
}
@Component({
    selector: 'app-document-observations',
    templateUrl: './document-observations.component.html',
    styleUrl: './document-observations.component.css',
})
export class DocumentObservationsComponent {
  observationsRequests: ObservationRequest[] = [
    {
      fecha: new Date('2023-06-08'),
      asociadoPor: 'ABC',
      observacion: 'Ejemplo de observación con un texto extenso, con el fin de observar el comportamiento de la tabla y poder comprobar una visualizacion adecuada'
    },
    {
      fecha: new Date('2023-04-15'),
      asociadoPor: 'ABC',
      observacion: 'Ejemplo de observación 2'
    },
    {
      fecha: new Date('2023-09-18'),
      asociadoPor: 'ABC',
      observacion: 'Ejemplo de observación 3'
    }
  ];
  fromQueryScheme!: FormGroup;
  observationForm!: FormGroup;

  constructor(private readonly fb: FormBuilder,){}
  ngOnInit(): void{
    this.fromQueryScheme = this.initForm();
    this.observationForm = this.fb.group({
      observacion: ['', Validators.required],
    })
  }
  onSubmit(){
    if(this.observationForm.invalid){
        this.observationForm.markAllAsTouched();
    }
    
  }
  initForm(): FormGroup{
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }
}
