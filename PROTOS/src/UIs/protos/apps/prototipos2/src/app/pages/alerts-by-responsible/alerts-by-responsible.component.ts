import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface Alerts {
  noSolicitud: number,
  proceso: string,
  tarea: string,
  estado: string,
  estadoTarea: string,
  fechaAsignacion: string,
  fechaVencimiento:string,
  accion: string
}

@Component({
  selector: 'app-alerts-by-responsible',
  templateUrl: './alerts-by-responsible.component.html',
  styleUrls: ['./alerts-by-responsible.component.css'],
})
export class AlertsByResponsibleComponent {
 
  constructor( private readonly fb: FormBuilder,
    private router: Router,private dialogService: DialogService
  ){}
  

  alertas:Alerts[] = [
    {
      noSolicitud: 1,
      proceso: 'Proceso 1',
      tarea: 'Tarea 1',
      estado: 'Ejecución',
      estadoTarea: '3',
      fechaAsignacion: '2024-01-01',
      fechaVencimiento: '2024-02-01',
      accion: 'Acción 1'
    },
    {
      noSolicitud: 2,
      proceso: 'Proceso 2',
      tarea: 'Tarea 2',
      estado: 'Asignada',
      estadoTarea: '1',
      fechaAsignacion: '2024-01-02',
      fechaVencimiento: '2024-02-02',
      accion: 'Acción 2'
    },
    {
      noSolicitud: 3,
      proceso: 'Proceso 3',
      tarea: 'Tarea 3',
      estado: 'Ejecución',
      estadoTarea: '2',
      fechaAsignacion: '2024-01-03',
      fechaVencimiento: '2024-02-03',
      accion: 'Acción 3'
    },
    {
      noSolicitud: 4,
      proceso: 'Proceso 4',
      tarea: 'Tarea 4',
      estado: 'Asignada',
      estadoTarea: '3',
      fechaAsignacion: '2024-01-04',
      fechaVencimiento: '2024-02-04',
      accion: 'Acción 4'
    },
    {
      noSolicitud: 5,
      proceso: 'Proceso 5',
      tarea: 'Tarea 5',
      estado: 'Ejecución',
      estadoTarea: '1',
      fechaAsignacion: '2024-01-05',
      fechaVencimiento: '2024-02-05',
      accion: 'Acción 5'
    },
    {
      noSolicitud: 6,
      proceso: 'Proceso 6',
      tarea: 'Tarea 6',
      estado: 'Asignada',
      estadoTarea: '2',
      fechaAsignacion: '2024-01-06',
      fechaVencimiento: '2024-02-06',
      accion: 'Acción 6'
    }
  ];
  
 
 
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
   subscription!: Subscription;
   sortColumn: string = ''; // Columna por la que se está ordenando
sortDirection: 'asc' | 'desc' = 'asc'; // Dirección de ordenamiento

  
  ngOnInit(): void {
 
  }
  
  onDeleteAlert(){

    const dialogData = new DialogData();
    dialogData.title = '¿Está seguro que desea eliminar la alerta?' 
    dialogData.textButtonCancel = "Cancelar";
    dialogData.type = DialogType.warning;
  
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.onSuccessDeleteAlert()
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSuccessDeleteAlert(){
    const dialogData = new DialogData();
    dialogData.title="Alerta eliminada de forma éxitosa"
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
  
    this.alertas.sort((a, b) => {
      const valueA = a[column as keyof Alerts];
      const valueB = b[column as keyof Alerts];
  
      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

}
