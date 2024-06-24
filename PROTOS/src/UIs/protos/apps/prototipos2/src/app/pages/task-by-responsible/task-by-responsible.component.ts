import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';

interface Tasks {
  nombreProceso: string;
  numeroSolicitud: number;
  estado: string;
  expediente:number;
  etapa: string;
  tarea: string;
  estadoTarea: string;
  fechaVencimiento: Date;
  estatusTemporal: string;
}


@Component({
  selector: 'app-task-by-responsible',
  templateUrl: './task-by-responsible.component.html',
  styleUrls: ['./task-by-responsible.component.css'],
})
export class TaskByResponsibleComponent {
  processRequests: Tasks[] = [
    {
      nombreProceso: 'Proceso 1',
      numeroSolicitud: 101,
      expediente:112313,
      estado: 'En ejecución',
      etapa: 'Etapa 1',
      tarea: 'Tarea 1',
      estadoTarea: 'Ejecución',
      fechaVencimiento: new Date('2023-01-15'),
      estatusTemporal: '1'
    },
    {
      nombreProceso: 'Proceso 2',
      numeroSolicitud: 102,
      estado: 'En ejecución',
      expediente:70880,
      etapa: 'Etapa 2',
      tarea: 'Tarea 2',
      estadoTarea: 'Asignada',
      fechaVencimiento: new Date('2023-02-15'),
      estatusTemporal: '2'
    },
    {
      nombreProceso: 'Proceso 3',
      numeroSolicitud: 103,
      estado: 'En ejecución',
      expediente:986787,
      etapa: 'Etapa 3',
      tarea: 'Tarea 3',
      estadoTarea: 'Ejecución',
      fechaVencimiento: new Date('2023-03-15'),
      estatusTemporal: '3'
    }
  ];

  formQueryTasks!: FormGroup;


  constructor( private readonly fb: FormBuilder,){}
  
  ngOnInit(): void {
  this.formQueryTasks = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [""],
      status: [null],
      date: [null],
    });
  }




}
