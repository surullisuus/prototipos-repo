import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-selected-document-observations',
  templateUrl: './selected-document-observations.component.html',
  styleUrl: './selected-document-observations.component.css',
})
export class SelectedDocumentObservationsComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  constructor(private dialogService: DialogService) {}
  isDisabledSubmit = false;
  subscription!: Subscription;
  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "Guardar observación";
    dialogData.body = "¿Está seguro de guardar esta observación?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          location.reload();
          this.onSavedModal(); 
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal(){
    const dialogData = new DialogData();
    dialogData.title = "Observación guardada de forma exitosa";
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
}
