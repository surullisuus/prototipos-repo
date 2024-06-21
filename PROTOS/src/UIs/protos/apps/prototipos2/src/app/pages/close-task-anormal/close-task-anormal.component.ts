import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-close-task-anormal',
  templateUrl: './close-task-anormal.component.html',
  styleUrl: './close-task-anormal.component.css',
})
export class CloseTaskAnormalComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

  subscription!: Subscription;

  constructor(private dialogService: DialogService) {}

  AcceptModal() {
    const dialogData = new DialogData();
    dialogData.title =
      'Se registró con éxito el cierre anormal de la tarea <agregar descripción de la tarea>';
    dialogData.type = DialogType.success;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
      });
  }
}
