import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface NotificationTypeRequest {
  nombreProceso: string;
  tipoDocumental: string;
  tipoNotificacion: string;
}
@Component({
  selector: 'app-notification-type',
  templateUrl: './notification-type.component.html',
  styleUrl: './notification-type.component.css',
})
export class NotificationTypeComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  notificationsTypeRequests: NotificationTypeRequest[] = [
  {
    nombreProceso: 'Proceso 1',
    tipoDocumental: 'Tipo documental 1',
    tipoNotificacion: 'Tipo notificacion 1'
  },
  {
    nombreProceso: 'Proceso 2',
    tipoDocumental: 'Tipo documental 2',
    tipoNotificacion: 'Tipo notificacion 2'
  },
  {
    nombreProceso: 'Proceso 3',
    tipoDocumental: 'Tipo documental 3',
    tipoNotificacion: 'Tipo notificacion 3'
  }
];
fromQueryScheme!: FormGroup;
isDisabledSubmit = false;
subscription!: Subscription;

constructor(private readonly fb: FormBuilder,private dialogService: DialogService) {}
ngOnInit(): void {
  this.fromQueryScheme = this.initForm();
}

initForm(): FormGroup {
  return this.fb.group({
    keyword: [null],
    status: [null],
    date: [null],
  });
}
AcceptModal() {
  const dialogData = new DialogData();
  dialogData.title = "¿Está seguro de eliminar este tipo de notificación?";
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
  dialogData.title = "Tipo de notificación eliminado de forma exitosa";
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
onCloseModal() {}
}
