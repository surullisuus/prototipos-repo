import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface DocumentRequest{
  noRadicado: number;
  fechaRadicacion: Date;
}

@Component({
  selector: 'app-associate-inbound-document-ges-doc',
  templateUrl: './associate-inbound-document-GesDoc.component.html',
  styleUrl: './associate-inbound-document-GesDoc.component.css',
})
export class AssociateInboundDocumentGesDocComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  
  documentsRequest: DocumentRequest[] = [
    {
      noRadicado: 123,
      fechaRadicacion: new Date('2024-07-20')
    },
    {
      noRadicado: 456,
      fechaRadicacion: new Date('2023-07-20')
    },
    {
      noRadicado: 789,
      fechaRadicacion: new Date('2023-07-20')
    }
  ]
  subscription!: Subscription;
  fromQueryScheme!: FormGroup;

  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.fromQueryScheme = this.initForm();
  }
  initForm(): FormGroup {
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }
  AssociateModal() {
    const dialogData = new DialogData();
    dialogData.title = "Asociar documentos";
    dialogData.body = "¿Esta seguro de asociar los documentos seleccionados a la tarea?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onAssociatedModal(); 
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onAssociatedModal() {
    const dialogData = new DialogData();
    dialogData.title = "Documentos asociados de forma exitosa";
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
}




