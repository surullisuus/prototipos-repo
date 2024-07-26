import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
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
  @Input() taskName = '';
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

  subscription!: Subscription;
  showNotification = false;

  constructor(private dialogService: DialogService) {}

  sendNotification() {
    const users = ['user1', 'user2', 'user3'];
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      //TODO
      console.log('accion para enviar señal de notificación');
    }
    this.showNotification = true;
    setTimeout(() => {
      this.showNotification = false;
    }, 1000);
  }

  AcceptModal() {
    const dialogData = new DialogData();
    dialogData.body = `Se registró con éxito el cierre anormal de la tarea "${this.taskName}"`;
    dialogData.title = 'Cerrar tarea de forma anormal';

    dialogData.type = DialogType.success;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
        this.sendNotification();
      });
  }

  get show() {
    return this.showNotification;
  }
}
