import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
    selector: 'app-manage-task-document',
    templateUrl: './manage-task-document.component.html',
    styleUrl: './manage-task-document.component.css',
})
export class ManageTaskDocumentComponent {
    @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
    documents=[
        {
            id: 1,
            nombreDocumento: 'Documento A',
            tipoDocumento: 'Entrada',
            origenDocumento: 'GesDoc',
        },
        {
            id: 2,
            nombreDocumento: 'Documento B',
            tipoDocumento: 'Salida',
            origenDocumento: 'Carga',
        },
        {
            id: 3,
            nombreDocumento: 'Documento C',
            tipoDocumento: 'Salida',
            origenDocumento: 'SISV',
        },
        {
            id: 4,
            nombreDocumento: 'Documento D',
            tipoDocumento: 'Salida',
            origenDocumento: 'SISV',
        },
        {
            id: 5,
            nombreDocumento: 'Documento E',
            tipoDocumento: 'Entrada',
            origenDocumento: 'GesDoc',
        },
        {
            id: 6,
            nombreDocumento: 'Documento F',
            tipoDocumento: 'Salida',
            origenDocumento: 'Carga',
        },
    ]
    fromQueryScheme!: FormGroup;
    isDisabledSubmit = false;
    subscription!: Subscription;
    constructor(private dialogService: DialogService) {}
    hasObservaciones(item: any): boolean {
        return item.tipoDocumento === 'Salida';
    }

    hasVerDocumento(item: any): boolean {
        return item.tipoDocumento === 'Entrada' || item.tipoDocumento === 'Salida';
    }
    DeleteModal() {
        const dialogData = new DialogData();
        dialogData.title = "Borrar documentos de Entrada/Salida";
        dialogData.body = "¿Está seguro que desea eliminar el documento?"
        dialogData.textButtonCancel = "Cerrar";
        dialogData.textButtonConfirm = "Aceptar";
        dialogData.type = DialogType.warning;
        this.subscription = this.dialogService
          .openModal(this.dialog, dialogData)
          .subscribe((dialogAction: DialogAction) => {
            if (dialogAction.action === ActionType.confirm) {
              dialogAction.eventClose.emit();
              this.onAcceptedModal(); 
              // Aquí puedes agregar el setTimeout si es necesario
            } else {
              dialogAction.eventClose.emit();
            }
          });
      }
      
      onAcceptedModal(){
        const dialogData = new DialogData();
        dialogData.title = "Documento eliminado de forma exitosa";
        dialogData.buttonConfirm = false;
        dialogData.textButtonCancel = 'Cerrar';
        dialogData.type = DialogType.success;
        this.subscription = this.dialogService
          .openModal(this.dialog, dialogData)
          .subscribe((DialogAction: DialogAction) => {
              DialogAction.eventClose.emit()
              location.reload();
          })
      }
}
