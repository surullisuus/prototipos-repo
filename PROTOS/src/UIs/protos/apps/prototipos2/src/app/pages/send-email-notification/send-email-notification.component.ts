import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-send-email-notification',
  templateUrl: './send-email-notification.component.html',
  styleUrl: './send-email-notification.component.css',
})
export class SendEmailNotificationComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  constructor(private dialogService: DialogService) {}
  isDisabledSubmit = false;
  subscription!: Subscription;
  SendModal() {
    const dialogData = new DialogData();
    dialogData.title = "Enviar notificación";
    dialogData.body = "¿Está seguro de enviar esta notificación por correo electrónico?"
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSendModal(); 
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSendModal(){
    const dialogData = new DialogData();
    dialogData.title = "Notificación enviada de forma exitosa";
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
