import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogType } from '../components/dialog/models/dialog-type';
import { DialogData } from '../components/dialog/models/dialog-data';
import {
  ActionType,
  DialogAction,
} from '../components/dialog/models/dialog-action';
import { Subscription } from 'rxjs';
import { DialogService } from '../components/dialog/services/dialog.service';

@Component({
  selector: 'app-edit-email-template-document',
  templateUrl: './edit-email-template-document.component.html',
  styleUrl: './edit-email-template-document.component.css',
})
export class EditEmailTemplateDocumentComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;
  nombre = '';
  descripcion = '';
  asunto = '';
  cuerpoCorreo = '';
  cc = '';

  constructor(private dialogService: DialogService) {}

  // Función que valida y marca los campos como tocados si no están llenos
  checkFilledFields() {
    if (
      !this.nombre ||
      !this.descripcion ||
      !this.asunto ||
      !this.cuerpoCorreo
    ) {
      document.querySelectorAll('input, textarea').forEach((input) => {
        (input as any).classList.add('ng-touched');
      });
    } else {
      this.SaveModal();
    }
  }

  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = 'Guardar plantilla de correo';
    dialogData.body =
      '¿Está seguro de querer guardar esta plantilla de correo?';
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.textButtonConfirm = 'Aceptar';
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSavedModal();
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal() {
    const dialogData = new DialogData();
    dialogData.title = 'Plantilla de correo guardada de forma exitosa';
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
        DialogAction.eventClose.emit();
        location.reload();
      });
  }
}
