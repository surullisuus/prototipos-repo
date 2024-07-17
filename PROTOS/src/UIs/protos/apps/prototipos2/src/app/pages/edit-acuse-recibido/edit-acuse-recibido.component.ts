import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-edit-acuse-recibido',
  templateUrl: './edit-acuse-recibido.component.html',
  styleUrl: './edit-acuse-recibido.component.css',
})
export class EditAcuseRecibidoComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

  delivered?: boolean;
  guideNumber = '';

  constructor(private dialogService: DialogService) {}

  setDelivered(rep: any) {
    this.delivered = rep.text === 'Sí' ? true : false;
  }

  setGuideNumber($event: any) {
    this.guideNumber = $event.target.value;
  }

  get isDelivered() {
    return this.delivered;
  }

  showSuccessTaskInitializationAlertState(body: string) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = DialogType.success;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
        location.reload();
        location.replace('/seguimiento-notificaciones');
      });
  }
}
