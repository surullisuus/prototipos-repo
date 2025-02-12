import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface ProcessRequest {
  nombreProceso: string;
  nombreEtapa:string
  nombreRequisito:string
  numeroSolicitud: number;
  fechaCreacion: Date;
  fechaFin: Date;
  estado: string;
}

@Component({
  selector: 'app-set-stage-requirements',
  templateUrl: './set-stage-requirements.component.html',
  styleUrls: ['./set-stage-requirements.component.css'],
})
export class SetStageRequirementsComponent { 
  
  
  processRequests: ProcessRequest[] = [
  {
    nombreProceso: 'Proceso 1',
    nombreEtapa:"Etapa 1",
    nombreRequisito:"requisito 1",
    numeroSolicitud: 101,
    fechaCreacion: new Date('2023-01-01'),
    fechaFin: new Date('2023-01-15'),
    estado: "1"
  },
  {
    nombreProceso: 'Proceso 2',
    nombreEtapa:"Etapa 2",
    nombreRequisito:"Requisito 2",
    numeroSolicitud: 102,
    fechaCreacion: new Date('2023-02-01'),
    fechaFin: new Date('2023-02-15'),
    estado: "2"
  },
  {
    nombreProceso: 'Proceso 3',
    nombreEtapa:"Etapa 3",
    nombreRequisito:"requisito 3",
    numeroSolicitud: 103,
    fechaCreacion: new Date('2023-03-01'),
    fechaFin: new Date('2023-03-15'),
    estado: "1"
  }
];

formQueryScheme!: FormGroup;
@ViewChild('openbutton') openbutton!: ElementRef;
@ViewChild('openbuttonEdit') openbuttonEdit!: ElementRef;
@ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
subscription!: Subscription;
filteredRequests: ProcessRequest[] = [];
sortColumn: string = ''; // Columna por la que se está ordenando
sortDirection: 'asc' | 'desc' = 'asc'; // Dirección de ordenamiento


constructor( private readonly fb: FormBuilder,
  private router: Router,private dialogService: DialogService
){}


ngOnInit(): void {
this.formQueryScheme = this.initForm();
this.filteredRequests = [...this.processRequests];
}

initForm(): FormGroup {
  return this.fb.group({
    proceso: [""],
    etapa: [""],
    requisito: [""],
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
    proceso: [""],
    etapa: [""],
    requisito: [""],
  });
   
  this.filteredRequests = [...this.processRequests]; // Restablece todos los datos en la tabla
}

filterResults() {
  const procesoSeleccionado = this.formQueryScheme.value.proceso;

  // Filtrar los datos según el 
  this.filteredRequests = this.processRequests.filter((request) => {
    const esProcesoInvalido = procesoSeleccionado === 'Proceso 4'||
    procesoSeleccionado === 'proceso 4'; // Proceso 4
    
    return !(esProcesoInvalido);
  });
}

onCreateRequirementModal(){
  if(this.openbutton){
    this.openbutton.nativeElement.click()
  }
}


onEditRequirementModal(){
  if(this.openbuttonEdit){
    this.openbuttonEdit.nativeElement.click()
  }
}
onDeleteModal(){
  const dialogData = new DialogData();
  dialogData.title = '¿Está seguro que desea eliminar el registro?' 
  dialogData.textButtonCancel = "Cancelar";
  dialogData.type = DialogType.warning;

  this.subscription = this.dialogService
    .openModal(this.dialog, dialogData)
    .subscribe((dialogAction: DialogAction) => {
      if (dialogAction.action === ActionType.confirm) {
        this.onSuccessDelete()
      } else {
        dialogAction.eventClose.emit();
      }
    });

}

onSuccessDelete(){
  const dialogData = new DialogData();
    dialogData.title="Registro eliminado de forma éxitosa"
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


}