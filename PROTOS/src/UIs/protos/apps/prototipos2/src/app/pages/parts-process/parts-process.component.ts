import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';


interface QuerySelect {
  text: string;
  value: number;
}
 
interface PartsProcess {
  tipoParte: string,
  noIdentificacion: number,
  nombreRazonSocial: string,
  departamento: string,
  municipio: string,
}
@Component({
  selector: 'app-parts-process',
  templateUrl: './parts-process.component.html',
  styleUrls: ['./parts-process.component.css'],
})
export class PartsProcessComponent {

  constructor( private readonly fb: FormBuilder,
    private router: Router,private dialogService: DialogService
  ){}
  
  sortColumn: string = ''; // Columna por la que se está ordenando
  sortDirection: 'asc' | 'desc' = 'asc'; // Dirección de ordenamiento
  typesListParts: QuerySelect[] = [];
  typesListDepartment: QuerySelect[] = [];
  typesListMunicipal: QuerySelect[] = [];

   partes:PartsProcess[]= [
    {
      tipoParte: 'Cliente',
      noIdentificacion: 12345678,
      nombreRazonSocial: 'Razón social oferente',
      departamento: 'Cundinamarca',
      municipio: 'Bogotá',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 87654321,
      nombreRazonSocial: 'Razón social patrimonio',
      departamento: 'Antioquia',
      municipio: 'Medellín',
    },
    {
      tipoParte: 'Cliente',
      noIdentificacion: 11223344,
      nombreRazonSocial: 'Razón social junio',
      departamento: 'Valle del Cauca',
      municipio: 'Cali',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 44332211,
      nombreRazonSocial: 'Razón social mi casa ya',
      departamento: 'Santander',
      municipio: 'Bucaramanga',
    },
    {
      tipoParte: 'Cliente',
      noIdentificacion: 55667788,
      nombreRazonSocial: 'Razón social uno',
      departamento: 'Bolívar',
      municipio: 'Cartagena',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 88776655,
      nombreRazonSocial: 'Razón social solidaridad',
      departamento: 'Atlántico',
      municipio: 'Barranquilla',
    },
  ];

 
  formQueryScheme!: FormGroup;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
   subscription!: Subscription;
   filteredRequests: PartsProcess[] = [];


  
  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  this.filteredRequests = [...this.partes];
  }
  

  initList(){
 
    this.typesListParts = [
      { text: 'Parte uno', value: 1 },
      { text: 'Parte dos', value: 2 },
      { text: 'Parte tres', value: 3 },
      { text: 'Parte cuatro', value: 4 }
    ];
  
    this.typesListDepartment = [
      { text: 'CAUCA', value: 1 },
      { text: 'CAQUETÁ', value: 2 },
      { text: 'CUNDINAMARCA', value: 3 },
      { text: 'RISARALDA', value: 4 },
     
    ];
  
    this.typesListMunicipal = [
      { text: 'POPAYÁN', value: 1 },
      { text: 'FLORENCIA', value: 2 },
      { text: 'BOGOTÁ', value: 3 },
      { text: 'PEREIRA', value: 4},
      ];
  }
  
  initForm(): FormGroup {
    this.initList()
    return this.fb.group({
      tipoParte:["1"],
      noIdentificacion:[],
      razon:[],
      departamento:["1"],
      municipio:["1"],
      keyword: [null],
      status: [null],
      date: [null],
    });
  }
  
  onCreatePart(){
    this.router.navigate(['/crear-parte']);
  }

  onDeletePart(){

    const dialogData = new DialogData();
    dialogData.title = '¿Está seguro de eliminar el registro?' 
    dialogData.textButtonCancel = "Cancelar";
    dialogData.type = DialogType.warning;
  
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.onSuccessDeletePart()
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSuccessDeletePart(){
    const dialogData = new DialogData();
    dialogData.title="Registro eliminado de forma exitosa"
    dialogData.type = DialogType.success;
       dialogData.buttonCancel=false
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          location.reload();
         
        } 
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
  
    this.partes.sort((a, b) => {
      const valueA = a[column as keyof PartsProcess];
      const valueB = b[column as keyof PartsProcess];
  
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
      tipoParte:["1"],
      noIdentificacion:[],
      razon:[],
      departamento:["1"],
      municipio:["1"],
      keyword: [null],
      status: [null],
      date: [null],
    });
     
    this.filteredRequests = [...this.partes]; // Restablece todos los datos en la tabla
  }

  filterResults() {
    const procesoSeleccionado = this.formQueryScheme.value.tipoParte;

    // Filtrar los datos según el 
    this.filteredRequests = this.partes.filter((request) => {
      const esProcesoInvalido = procesoSeleccionado === '4'; // Proceso 4
      
      return !(esProcesoInvalido);
    });
  }


}
