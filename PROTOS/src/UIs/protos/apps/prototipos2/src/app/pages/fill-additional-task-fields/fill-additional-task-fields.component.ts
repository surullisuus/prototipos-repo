import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface processOption{
  processName: string;
}
interface stageOption{
  stageName: string;
}
@Component({
  selector: 'app-fill-additional-task-fields',
  templateUrl: './fill-additional-task-fields.component.html',
  styleUrl: './fill-additional-task-fields.component.css',
})
export class FillAdditionalTaskFieldsComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  processTypes: processOption[] = [
    {
      processName: 'ABC',
    },
    {
      processName: 'ABC',
    },
    {
      processName: 'ABC',
    },
  ]
  stageTypes: stageOption[] = [
    {
      stageName: 'ABC',
    },
    {
      stageName: 'ABC',
    },
    {
      stageName: 'ABC',
    },
  ]
  constructor(private dialogService: DialogService) {}
  subscription!: Subscription;
  processOptions() {
    return this.processTypes.map((processOption) => {
      return { id: processOption.processName, text: processOption.processName };
    });
  }
  stageOptions() {
    return this.stageTypes.map((stageOption) => {
      return { id: stageOption.stageName, text: stageOption.stageName };
    });
  }
  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "Diligenciar campos adicionales Tarea";
    dialogData.body = "¿Esta seguro de diligenciar estos campos adicionales a la tarea?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSavedModal(); 
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal() {
    const dialogData = new DialogData();
    dialogData.title = "Campos diligenciados de forma exitosa";
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
          DialogAction.eventClose.emit()
          location.reload();
      });
  }
}
