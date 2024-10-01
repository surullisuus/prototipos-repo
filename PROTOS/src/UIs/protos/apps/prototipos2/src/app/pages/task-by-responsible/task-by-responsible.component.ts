import { Component } from '@angular/core';
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
interface QuerySelect {
  text: string;
  value: number;
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
  filteredRequests: Tasks[] = [];
  typesListProcess: QuerySelect[] = [];
  typesListStages: QuerySelect[] = [];
  typesListStates: QuerySelect[] = [];
    
  sortColumn: string = ''; // Columna por la que se está ordenando
  sortDirection: 'asc' | 'desc' = 'asc'; // Dirección de ordenamiento


  constructor( private readonly fb: FormBuilder,){}
  
  ngOnInit(): void {
  this.formQueryTasks = this.initForm();
  this.filteredRequests = [...this.processRequests];
  
  if (!sessionStorage.getItem('reloaded')) {
    // Recargar la página al iniciar el componente
    sessionStorage.setItem('reloaded', 'true');
    window.location.reload();
  } else {
    // Si ya se recargó, eliminar el indicador para futuras visitas
    sessionStorage.removeItem('reloaded');
  }  

  }

  initList(){
 
    this.typesListProcess = [
      { text: 'Proceso 1', value: 1 },
      { text: 'Proceso 2', value: 2 },
      { text: 'Proceso 3', value: 3 },
      { text: 'Proceso 4', value: 4 }
    ];
  
    this.typesListStages = [
      { text: 'Etapa 1', value: 1 },
      { text: 'Etapa 2', value: 2 },
      { text: 'Etapa 3', value: 3 },
      { text: 'Etapa 4', value: 4 },
     
    ];
  
    this.typesListStates= [
      { text: 'Ejecución', value: 1 },
      { text: 'Asignada', value: 2 },
      { text: 'Por Asignar', value: 3 },
      { text: 'Terminada', value: 4},
      ];
  }
  

  initForm(): FormGroup {
    this.initList()
    return this.fb.group({
      proceso:["1"],
      noSolicitud:[],
      etapa:["1"],
      estadoTarea:["1"],
      keyword: [""],
      status: [null],
      date: [null],
    });
  }

  sortTable(column: string) {
    if (this.sortColumn === column) {
      // Alternar la dirección si la columna es la misma
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Si es una nueva columna, ordenar en ascendente
      this.sortDirection = 'asc';
    }
    this.sortColumn = column;
  
    this.processRequests.sort((a, b) => {
      const valueA = a[column as keyof Tasks];
      const valueB = b[column as keyof Tasks];
  
      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
  
  resetFilters(): void {
    this.formQueryTasks.reset({
      proceso:["1"],
      noSolicitud:[],
      etapa:["1"],
      estadoTarea:["1"],
      keyword: [null],
      status: [null],
      date: [null],
    });
     
    this.filteredRequests = [...this.processRequests]; // Restablece todos los datos en la tabla
  }

  filterResults() {
    const procesoSeleccionado = this.formQueryTasks.value.proceso;

    // Filtrar los datos según el 
    this.filteredRequests = this.processRequests.filter((request) => {
      const esProcesoInvalido = procesoSeleccionado === '4'; // Proceso 4
      
      return !(esProcesoInvalido);
    });
  }



}
