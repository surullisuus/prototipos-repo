import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Modal } from '@protos/lib';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { ActionType } from '../../components/dialog/models/action-type.enum';

@Component({
  selector: 'app-preliminar-view',
  templateUrl: './preliminar-view.component.html',
  styleUrl: './preliminar-view.component.css',
})
export class PreliminarViewComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('closePreliminarViewModal') closePreliminarViewModal!: ElementRef;
  modalConfig: Modal = new Modal();

  public modalData = {
    saveDocument: {
      title: '¿Está seguro de guardar el documento?',
      body: 'Recuerde que una vez guardado no podrá hacer modificaciones.',
      textButtonCancel: 'Cancelar',
      textButtonConfirm: 'Aceptar',
      type: DialogType.warning,
    },
    preliminar: {
      title: 'Vista preliminar',
      body: 'Insertar vista preliminar',
      textButtonCancel: 'Eliminar',
      textButtonConfirm: 'Guardar',
      type: DialogType.warning,
    },
  };
  subscription!: Subscription;

  constructor(private dialogService: DialogService) {}

  showModal(event: Event) {
    event.preventDefault();
    if (this.closePreliminarViewModal) {
      this.closePreliminarViewModalClick();
      this.showModalSaveDocument(event);
    }
  }
  closePreliminarViewModalClick() {
    this.closePreliminarViewModal.nativeElement.click();
  }

  showModalSaveDocument(event: Event) {
    event.preventDefault();
    const dialogData = new DialogData();
    //llenar datos del modal
    dialogData.title = this.modalData.saveDocument.title;
    dialogData.body = this.modalData.saveDocument.body;
    dialogData.textButtonCancel = this.modalData.saveDocument.textButtonCancel;
    dialogData.textButtonConfirm =
      this.modalData.saveDocument.textButtonConfirm;
    dialogData.type = this.modalData.saveDocument.type;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          //hacer accion al confirmar modal
          dialogAction.eventClose.emit();
          this.showSuccessAlertState('Se guardó el documento de salida');
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showSuccessAlertState(body: string) {
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
}
