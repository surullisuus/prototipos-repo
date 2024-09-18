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

interface QuerySelect {
  text: string;
  value: number;
}

@Component({
  selector: 'app-process-request',
  templateUrl: './process-request.component.html',
  styleUrl: './process-request.component.css',
})
export class ProcessRequestComponent {


  typesListProcess: QuerySelect[] = [];
  typesListStages: QuerySelect[] = [];
  StatusList: QuerySelect[] = [];
  filteredRequests: ProcessRequest[] = [];
  // Propiedades para ordenar la tabla
  sortColumn: string = ''; // Columna por la que se está ordenando
  sortDirection: 'asc' | 'desc' = 'asc'; // Dirección de ordenamiento

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
      estado: "1"
    }
  ];

  formQueryScheme!: FormGroup;

  constructor( private readonly fb: FormBuilder,){}

  filterResults() {
    const procesoSeleccionado = this.formQueryScheme.value.proceso;
    const estadoSeleccionado = this.formQueryScheme.value.status;

    // Filtrar los datos según el proceso y el estado
    this.filteredRequests = this.processRequests.filter((request) => {
      const esProcesoInvalido = procesoSeleccionado === '4'; // Proceso 4
      const esEstadoInvalido = !['1', '2'].includes(request.estado); // Solo "Asignado" y "Sin Asignar"

      return !(esProcesoInvalido || esEstadoInvalido);
    });
  }

  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  this.filteredRequests = [...this.processRequests]; 
  }
  
  
  initList(){
     this.typesListProcess = [
      { text: 'Proceso 1', value: 1 },
      { text: 'Proceso 2', value: 2 },
      { text: 'Proceso 3', value: 3 },
      { text: 'Proceso 4', value: 4 }
    ];
  
    this.StatusList = [
      { text: 'Asignado', value: 1 },
      { text: 'Sin Asignar', value: 2 },
      { text: 'En Ejecución', value: 3 },
      { text: 'Aprobado', value: 4 },
     
    ];
  }
  

  initForm(): FormGroup {
  this.initList()
    return this.fb.group({
      proceso:["1"],
      noSolicitud:[""],
      fechaFin:[null],
      fechaInicio:[null],
      keyword: [""],
      status: ["1"],
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
      const valueA = a[column as keyof ProcessRequest];
      const valueB = b[column as keyof ProcessRequest];
  
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
    this.formQueryScheme.reset({
      proceso: ["1"], // Valor por defecto (equivalente a la opción "Escoger")
      noSolicitud: '',
      fechaInicio: '',
      fechaFin: '',
      status: ["1"], // Valor por defecto (equivalente a la opción "Escoger")
    });
     // Restablece los valores del formulario a su estado inicial
    this.filteredRequests = [...this.processRequests]; // Restablece todos los datos en la tabla
  }


}
