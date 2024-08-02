import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-upload-selected-document',
  templateUrl: './upload-selected-document.component.html',
  styleUrl: './upload-selected-document.component.css',
})
export class UploadSelectedDocumentComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

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
    dialogData.title = "";
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
    dialogData.title = "";
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
