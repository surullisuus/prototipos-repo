import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Process {
  id: number;
  name: string;
  tipoDocumental: string;
  process: string;
  description: string;
}

@Component({
  selector: 'app-manage-plantillas-correos',
  templateUrl: './manage-plantillas-correos.component.html',
  styleUrl: './manage-plantillas-correos.component.css',
})
export class ManagePlantillasCorreosComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

  selectedProcess: string | null = null;
  selectedDocument: string | null = null;
  formQueryScheme!: FormGroup;

  process: Process[] = [
    {
      id: 1,
      name: 'abc',
      tipoDocumental: 'abc',
      process: 'ABC',
      description: 'Abc............',
    },
    {
      id: 2,
      name: 'abc',
      tipoDocumental: 'abc',
      process: 'abc',
      description: 'abc............',
    },
    {
      id: 3,
      name: 'abc',
      tipoDocumental: 'abc',
      process: 'abc',
      description: 'abc............',
    },
  ];

  constructor(
    private dialogService: DialogService,
    private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this._formBuilder.group({
      idPlantilla: [null],
    });
  }

  processOptions() {
    return [
      {
        id: 1,
        text: 'Proceso 1',
      },
      {
        id: 2,
        text: 'Proceso 2',
      },
      {
        id: 3,
        text: 'Proceso 3',
      },
    ];
  }

  setSelectedProcess(process: { id: number; text: string }) {
    this.selectedProcess = process.text;
  }

  documentOptions() {
    return [
      {
        id: 1,
        text: 'Documento 1',
      },
      {
        id: 2,
        text: 'Documento 2',
      },
      {
        id: 3,
        text: 'Documento 3',
      },
    ];
  }

  setSelectedDocument(document: { id: number; text: string }) {
    this.selectedDocument = document.text;
  }

  onDeleteEmailTemplateModal(task: Process, $event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    dialogData.title = 'Eliminar plantilla de correo';
    dialogData.body = `¿Está seguro que desea eliminar la plantilla? Recuerde que la acción es irreversible.`;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body = `Plantilla eliminada de forma exitosa.`;
          dialogAction.eventClose.emit();
          this.showSuccessTaskInitializationAlertState(body);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onAsociarPlantilla($event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    dialogData.title = 'Asociar plantilla de correo';
    dialogData.body = `¿Está seguro que desea asociar la plantilla de correo al tipo de alerta?`;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body = `Transacción exitosa.`;
          dialogAction.eventClose.emit();
          this.showSuccessTaskInitializationAlertState(body);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onAsociarPlantillaAlreadyPresent($event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    dialogData.title = 'Asociar plantilla de correo';
    dialogData.body = `El tipo de alerta ya tiene una plantilla de correo asociada ¿Desea modificarla?`;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.danger;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body = `Transacción exitosa.`;
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
