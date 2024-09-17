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
  casual?: string;

  constructor(private dialogService: DialogService) {}

  setDelivered(rep: any) {
    this.delivered = rep.text === 'Sí' ? true : false;
  }

  setGuideNumber($event: any) {
    this.guideNumber = $event.target.value;
  }

  setCasual($event: any) {
    this.casual = $event.text;
  }

  get isDelivered() {
    return this.delivered;
  }

  get activeSaveButton() {
    console.log(this.delivered, this.guideNumber, this.casual);

    if (this.delivered === undefined) {
      return false;
    }

    if (!this.delivered && this.casual !== '') {
      return true;
    }

    return (
      this.delivered && this.guideNumber !== '' && this.casual !== undefined
    );
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
