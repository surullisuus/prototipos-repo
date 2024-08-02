import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface UploadedHistory{
  estado: string;
  nombreArchivo: string;
  fechaCarga: Date;
  usuarioCarga: string;
}
@Component({
  selector: 'app-upload-info-modal',
  templateUrl: './upload-info-modal.component.html',
  styleUrl: './upload-info-modal.component.css',
})
export class UploadInfoModalComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

  uploadedHistory: UploadedHistory[] = [
    {
      estado: 'Estado 1',
      nombreArchivo: 'Archivo1',
      fechaCarga: new Date('2024-08-1'),
      usuarioCarga: 'Usuario 1'
    },
    {
      estado: 'Estado 2',
      nombreArchivo: 'Archivo2',
      fechaCarga: new Date('2024-08-1'),
      usuarioCarga: 'Usuario 2'
    },
    {
      estado: 'Estado 3',
      nombreArchivo: 'Archivo3',
      fechaCarga: new Date('2024-08-1'),
      usuarioCarga: 'Usuario 3'
    }
  ]

  formQueryScheme!: FormGroup;
  subscription!: Subscription;
  fileUploaded = false;

  constructor(private dialogService: DialogService) {}

  onFileUploaded(): void {
    this.fileUploaded = true;
    //this.SaveModal();
  }

  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "¿Desea guardar el documento y asociarlo a la tarea?";
    dialogData.textButtonCancel = "Cancelar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          // subir documento
          this.fileUploaded = true;
          dialogAction.eventClose.emit();
          this.onSavedModal();
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal() {
    const dialogData = new DialogData();
    dialogData.title = "Documento guardado y asociado de forma exitosa";
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

  onCloseModal() {}
}
