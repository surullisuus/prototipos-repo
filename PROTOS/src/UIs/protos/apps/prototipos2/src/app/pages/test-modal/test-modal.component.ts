import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrl: './test-modal.component.css',
})
export class TestModalComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  
  isDisabledSubmit = false;
  subscription!: Subscription;

  constructor(private dialogService: DialogService){}

  DeleteModal() {
  const dialogData = new DialogData();
  dialogData.title = "¿Está seguro de eliminar el documento?";
  dialogData.textButtonCancel = "Cerrar";
  dialogData.textButtonConfirm = "Aceptar";
  dialogData.type = DialogType.warning;
  this.subscription = this.dialogService
    .openModal(this.dialog, dialogData)
    .subscribe((dialogAction: DialogAction) => {
      if (dialogAction.action === ActionType.confirm) {
        dialogAction.eventClose.emit();
        this.onAcceptedModal(); 
      } else {
        dialogAction.eventClose.emit();
      }
    });
  }

  onAcceptedModal(){
    const dialogData = new DialogData();
    dialogData.title = "Documento eliminado de forma exitosa";
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
}

