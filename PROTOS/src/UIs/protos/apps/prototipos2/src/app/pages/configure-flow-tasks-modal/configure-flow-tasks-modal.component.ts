import {  Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { ActionType } from '../../components/dialog/models/action-type.enum';

@Component({
    selector: 'app-configure-flow-tasks-modal',
    templateUrl: './configure-flow-tasks-modal.component.html',
    styleUrl: './configure-flow-tasks-modal.component.css',
})
export class ConfigureFlowTasksModalComponent {
    @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
    @ViewChild('closePreliminarViewModal') closePreliminarViewModal!: ElementRef;

    subscription!: Subscription;

    tareas = [
      { id: 321, nombre: 'Proyectar resolución de emplazamiento' },
      { id: 322, nombre: 'Revisar proyección de la resolución de emplazamiento' },
      { id: 323, nombre: 'Suscribir resolución de emplazamiento' },
      // ... otras etapas
    ];

    constructor(private dialogService: DialogService) {}

    moverArriba(id: number) {
      const index = this.tareas.findIndex(tarea => tarea.id === id);
      if (index > 0) {
        const temp = this.tareas[index - 1];
        this.tareas[index - 1] = this.tareas[index];
        this.tareas[index] = temp;
      }
    }

    moverAbajo(id: number) {
      const index = this.tareas.findIndex(tarea => tarea.id === id);
      if (index < this.tareas.length - 1) {
        const temp = this.tareas[index + 1];
        this.tareas[index + 1] = this.tareas[index];
        this.tareas[index] = temp;
      }
    }

    showModal(event: Event) {
      event.preventDefault();
      if (this.closePreliminarViewModal) {
        this.closePreliminarViewModalClick();
        this.showModalSaveDocument(event);
      }
    }

    closePreliminarViewModalClick() {
      this.closePreliminarViewModal.nativeElement.click();
    }

    showModalSaveDocument(event: Event) {
      event.preventDefault();
      const dialogData = new DialogData();
      dialogData.title = 'Guardar flujo';
      dialogData.body = '¿Está seguro de guardar el flujo?';
      dialogData.textButtonCancel = 'Cancelar';
      dialogData.textButtonConfirm = 'Aceptar';
      dialogData.type = DialogType.warning;

      this.subscription = this.dialogService
        .openModal(this.dialog, dialogData)
        .subscribe((dialogAction: DialogAction) => {
          if (dialogAction.action === ActionType.confirm) {
            // Acción al confirmar
            dialogAction.eventClose.emit();
            this.showSuccessAlertState('Flujo guardado con éxito');
          } else {
            dialogAction.eventClose.emit();
          }
        });
    }

    cancelar() {}

    showSuccessAlertState(body: string) {
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
