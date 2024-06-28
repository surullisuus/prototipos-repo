import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Modal } from '@protos/lib';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface ProcessPhase {
  processName: string;
  phase: string;
  task: string;
  id: number;
}

@Component({
  selector: 'app-manage-process-configs',
  templateUrl: './manage-process-configs.component.html',
  styleUrl: './manage-process-configs.component.css',
})
export class ManageProcessConfigsComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;
  modalConfig: Modal;

  processPhases: ProcessPhase[] = [
    {
      id: 1,
      processName: 'ABC',
      phase: 'ABC',
      task: 'ABC',
    },
    {
      id: 2,
      processName: 'ABC',
      phase: 'ABC',
      task: 'ABC',
    },
    {
      id: 3,
      processName: 'ABC',
      phase: 'ABC',
      task: 'ABC',
    },
  ];

  selectedProcess: string | null = null;
  selectedPhase: string | null = null;
  selectedTask: string | null = null;

  constructor(private dialogService: DialogService) {
    this.modalConfig = new Modal();
  }

  processOptions() {
    return this.processPhases.map((processPhase) => {
      return { id: processPhase.processName, text: processPhase.processName };
    });
  }

  phaseOptions() {
    return this.processPhases.map((process) => {
      return { id: process.phase, text: process.phase };
    });
  }

  taskOptions() {
    return this.processPhases.map((process) => {
      return { id: process.task, text: process.task };
    });
  }

  setSelectedProcess($event: { id: string; text: string }) {
    this.selectedProcess = $event.text;
  }

  setSelectedPhase($event: { id: string; text: string }) {
    this.selectedPhase = $event.text;
  }

  setSelectedTask($event: { id: string; text: string }) {
    this.selectedTask = $event.text;
  }

  clearFilters() {
    this.selectedProcess = null;
    this.selectedPhase = null;
    this.selectedTask = null;
  }

  // MODALS

  onDeleteTaskModal(processPhase: ProcessPhase) {
    const dialogData = new DialogData();
    dialogData.body = `¿Está seguro que desea eliminar el registro ${processPhase.processName}?`;
    dialogData.title = 'Eliminar registro';
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.dialogService.resultActionModal;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.showSuccessAlert('Registro eliminado de formar exitosa');
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showSuccessAlert(body: string) {
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
      });
  }
}
