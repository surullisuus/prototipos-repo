import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import {
  ActionType,
  DialogAction,
} from '../../components/dialog/models/dialog-action';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reject-document',

  templateUrl: './reject-document.component.html',
  styleUrl: './reject-document.component.css',
})
export class RejectDocumentComponent implements OnInit {
  formQueryScheme!: FormGroup;
  @Input() documentId: string | undefined;
  @ViewChild('closeRejectDocumentModal')
  closeRejectDocumentModal!: ElementRef;
  constructor(
    private readonly dialogService: DialogService,
    private readonly fb: FormBuilder
  ) {}
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

  subscription!: Subscription;

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      causal: [null],
    });
  }

  onRejectDocument(): void {
    this.showDialogDocument('¿Está seguro de RECHAZAR el documento?');

  }

  showDialogDocument(title: string) {
    const dialogData = new DialogData();
    dialogData.title = title;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;
    this.closeRejectDocumentModal.nativeElement.click();
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          // logica para rechazar documento
          console.log(this.documentId);
          console.log(this.formQueryScheme.value);
          dialogAction.eventClose.emit();
          this.showAlertState(
            'Documento rechazado exitosamente',
            DialogType.success
          );
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showAlertState(body: string, dialogType: DialogType) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = dialogType;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        location.reload();
        dialogAction.eventClose.emit();
      });
  }
}
