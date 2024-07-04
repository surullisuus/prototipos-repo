import {
  Component,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface DocumentType {
  id: number;
  process: string;
  documents: string[];
}

@Component({
  selector: 'app-see-documental-types',
  templateUrl: './see-documental-types.component.html',
  styleUrl: './see-documental-types.component.css',
})
export class SeeDocumentalTypesComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;
  selectedProcess: string | null = null;
  selectedDocumentType: string | null = null;

  tiposDocumentales: DocumentType[] = [
    {
      id: 1,
      process: 'Proceso de selección',
      documents: ['Acta de selección', 'Acta de apertura', 'Acta de cierre'],
    },
    {
      id: 2,
      process: 'Proceso de contratación',
      documents: ['Acta de contratación', 'Acta de apertura', 'Acta de cierre'],
    },
    {
      id: 3,
      process: 'Proceso de ejecución',
      documents: ['Acta de ejecución', 'Acta de apertura', 'Acta de cierre'],
    },
    {
      id: 4,
      process: 'Proceso de liquidación',
      documents: ['Acta de liquidación', 'Acta de apertura', 'Acta de cierre'],
    },
  ];

  constructor(private dialogService: DialogService) {}

  getProcessList() {
    return this.tiposDocumentales.map((documentType) => {
      return { id: documentType.id, text: documentType.process };
    });
  }

  getDocumentTypesList() {
    return [
      {
        id: 1,
        text: 'Acta de selección',
      },
      {
        id: 2,
        text: 'Acta de apertura',
      },
      {
        id: 3,
        text: 'Acta de cierre',
      },
    ];
  }

  setProcess(processSelected: { id: number; text: string }) {
    this.selectedProcess = processSelected.text;
    console.log('selectedDocumentType', this.selectedDocumentType);
  }

  setDocumentType(documentType: { id: number; text: string }) {
    this.selectedDocumentType = documentType.text;
  }

  get activeSaveButton(): boolean {
    console.log('selectedProcess', this.selectedProcess);
    return this.selectedProcess !== null && this.selectedDocumentType !== null;
  }

  cancelSearch() {
    this.selectedProcess = null;
    this.selectedDocumentType = null;
  }

  // MODALES
  showSaveInformationModal(proccess: DocumentType[], $event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    dialogData.title = 'Guardar información';
    dialogData.body = `¿Está seguro de esta información?`;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body = `El registro fue guardado con éxito`;
          dialogAction.eventClose.emit();
          this.showSuccessTaskInitializationAlertState(body);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showDeleteProcessModal(proccess: DocumentType, $event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    dialogData.title = 'Eliminar registro';
    dialogData.body = `¿Está seguro de eliminar el registro ${proccess.process}?`;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body = `Registro eliminado de forma exitosa`;
          dialogAction.eventClose.emit();
          this.showSuccessTaskInitializationAlertState(body);
        } else {
          dialogAction.eventClose.emit();
        }
      });
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
      });
  }
}