import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-see-consultar-radicado',
  templateUrl: './see-consultar-radicado.component.html',
  styleUrl: './see-consultar-radicado.component.css',
})
export class SeeConsultarRadicadoComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

  radicados: any[] = [
    {
      selected: false,
      number: '123456',
      date: new Date(),
    },
  ];

  constructor(private dialogService: DialogService) {}

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
