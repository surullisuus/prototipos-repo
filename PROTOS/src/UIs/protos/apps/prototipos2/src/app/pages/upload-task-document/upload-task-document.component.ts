import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogType } from '../../components/dialog/models/dialog-type';

@Component({
  selector: 'app-upload-task-document',
  templateUrl: './upload-task-document.component.html',
  styleUrls: ['./upload-task-document.component.css'],
})
export class UploadTaskDocumentComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  formQueryScheme!: FormGroup;
  subscription!: Subscription;
  fileUploaded = false;

  constructor(private dialogService: DialogService) {}

  onFileUploaded(): void {
    this.SaveModal();
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
