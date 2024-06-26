import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { ActionType } from '../../components/dialog/models/action-type.enum';

@Component({
  selector: 'app-see-requirements',
  templateUrl: './see-requirements.component.html',
  styleUrls: ['./see-requirements.component.css'],
})
export class SeeRequirementsComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('verRequisitos') verRequisitos!: ElementRef;

  subscription!: Subscription;

  constructor(private dialogService: DialogService) {}

  

  AcceptModal() {
    const dialogData = new DialogData();
    dialogData.title = "¿Está seguro de marcar los requisitos como realizados?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit()
          this.showSuccessAlert("Los requisitos han sido marcados como realizados exitosamente.")
         
         
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showSuccessAlert(body: string) {
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

  onCloseModal() {}
}
