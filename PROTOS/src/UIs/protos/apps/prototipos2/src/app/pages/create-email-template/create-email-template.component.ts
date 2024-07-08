import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { DialogType } from '../../components/dialog/models/dialog-type';

interface Process {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
}

@Component({
  selector: 'app-create-email-template',
  templateUrl: './create-email-template.component.html',
  styleUrl: './create-email-template.component.css',
})
export class CreateEmailTemplateComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  selectedProcess: string | null = null;
  selectedDocument: string | null = null;

  process: Process[] = [
    {
      id: 1,
      name: 'abc',
      documentType: 'abc',
      process: 'ABC',
      description: 'Abc............',
    },
    {
      id: 2,
      name: 'abc',
      documentType: 'abc',
      process: 'abc',
      description: 'abc............',
    },
    {
      id: 3,
      name: 'abc',
      documentType: 'abc',
      process: 'abc',
      description: 'abc............',
    },
  ];
  subscription!: Subscription;

  constructor(private dialogService: DialogService) {}

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
        location.replace('/consultar-plantillas-correo');
      });
  }
}
