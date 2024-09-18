import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { ActionType, DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';

@Component({
  selector: 'app-edit-email-template',
  templateUrl: './edit-email-template.component.html',
  styleUrl: './edit-email-template.component.css',
})
export class EditEmailTemplateComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;
  nombre: string = '';
  descripcion: string = '';
  asunto: string = '';
  cuerpoCorreo: string = '';

  constructor(private dialogService: DialogService) {}

  // Función que valida y marca los campos como tocados si no están llenos
  checkFilledFields() {
    if (!this.nombre || !this.descripcion || !this.asunto || !this.cuerpoCorreo) {
      document.querySelectorAll('input, textarea').forEach((input) => {
        (input as any).classList.add('ng-touched');
      });
    } else {
      this.SaveModal();
    }
  }

  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "Guardar plantilla de correo";
    dialogData.body = "¿Está seguro de querer guardar esta plantilla de correo?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
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
    dialogData.title = "Plantilla de correo guardada de forma exitosa";
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

  onCloseModal() {}
}
