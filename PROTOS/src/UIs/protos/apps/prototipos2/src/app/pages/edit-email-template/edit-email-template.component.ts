<<<<<<< HEAD
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Process {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
}

interface CurrentProcess {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
  asunto: string;
  cuerpo: string;
  cc: string;
  desde: string;
}
=======
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
>>>>>>> origin/main

@Component({
  selector: 'app-edit-email-template',
  templateUrl: './edit-email-template.component.html',
  styleUrl: './edit-email-template.component.css',
})
export class EditEmailTemplateComponent {
<<<<<<< HEAD
  selectedProcess: string | null = null;
  selectedDocument: string | null = null;
  currentProcessId: CurrentProcess = {
    id: 1,
    name: 'abc',
    documentType: 'abc',
    process: 'ABC',
    description: 'Abc............',
    asunto: 'Asunto',
    cuerpo: 'Cuerpo',
    cc: 'CC',
    desde: 'Desde',
  };
  loading = false;

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

  constructor(private _activeRoute: ActivatedRoute) {
    this.loading = true;
    _activeRoute.queryParams.subscribe((params) => {
      this.currentProcessId = this.fetchCurrentProcess(params?.['id']);
    });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  fetchCurrentProcess(id: number) {
    console.log('fetching process with id: ', id);
    return {
      id: 1,
      name: 'Plantilla xyz',
      documentType: 'Documento 1',
      process: 'Proceso 1',
      description: 'Esta plantilla de correo electrónico sirve para...',
      asunto: 'Asunto',
      cuerpo:
        'señor(a)\n<nombre destinatario>\nCordial saludo\n\nEste correo es para informarle que...',
      cc: 'nombreusuario@dominio.texto',
      desde: 'nombreusuario@dominio.texto',
    };
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
=======
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  constructor(private dialogService: DialogService) {}
  isDisabledSubmit = false;
  subscription!: Subscription;
  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "¿Está seguro de guardar cambios?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSavedModal(); 
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal(){
    const dialogData = new DialogData();
    dialogData.title = "Cambios guardados de forma exitosa";
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
          DialogAction.eventClose.emit()
          location.reload();
      })
  }
  onCloseModal() {}
>>>>>>> origin/main
}
