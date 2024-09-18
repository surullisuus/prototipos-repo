import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Modal } from '@protos/lib';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
export class ManageProcessConfigsComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;
  modalConfig: Modal;
  form!: FormGroup;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

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

  constructor(private dialogService: DialogService, private fb: FormBuilder) {
    this.modalConfig = new Modal();
    this.form = this.initForm();
  }

  ngOnInit(): void {
    // Inicializa processPhases con datos si es necesario
  }

  initForm(): FormGroup {
    return this.fb.group({
      // Define tus controles de formulario aquí
    });
  }

  onSearchButton():void{
    this.showAlert("No se encontraron resultados asociados a la búsqueda",DialogType.warning)
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

  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortColumn = column;

    this.processPhases.sort((a, b) => {
      const valueA = a[column as keyof ProcessPhase];
      const valueB = b[column as keyof ProcessPhase];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
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
          this.showAlert('Registro eliminado de formar exitosa',DialogType.success);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showAlert(body: string,dialogType:DialogType) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = dialogType;
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
