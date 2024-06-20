import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

interface ProcessRequest {
  nombreProceso: string;
  numeroSolicitud: number;
  fechaCreacion: Date;
  fechaFin: Date;
  estado: string;
}
@Component({
  selector: 'app-process-request',
  templateUrl: './process-request.component.html',
  styleUrl: './process-request.component.css',
})
export class ProcessRequestComponent {
  processRequests: ProcessRequest[] = [
    {
      nombreProceso: 'Proceso 1',
      numeroSolicitud: 101,
      fechaCreacion: new Date('2023-01-01'),
      fechaFin: new Date('2023-01-15'),
      estado: "1"
    },
    {
      nombreProceso: 'Proceso 2',
      numeroSolicitud: 102,
      fechaCreacion: new Date('2023-02-01'),
      fechaFin: new Date('2023-02-15'),
      estado: "2"
    },
    {
      nombreProceso: 'Proceso 3',
      numeroSolicitud: 103,
      fechaCreacion: new Date('2023-03-01'),
      fechaFin: new Date('2023-03-15'),
      estado: "3"
    }
  ];

  formQueryScheme!: FormGroup;


  constructor( private readonly fb: FormBuilder,){}
  
  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [""],
      status: [null],
      date: [null],
    });
  }
  

  
}
