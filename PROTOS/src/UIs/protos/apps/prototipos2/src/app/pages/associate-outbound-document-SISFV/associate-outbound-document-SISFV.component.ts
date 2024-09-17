import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormBuilder, FormGroup } from '@angular/forms';

interface DocumentRequest{
  tipoDocumental: string;
  fechaCreacion: Date;
}
interface documentalType {
  documentalName: string;
  id: number;
}
@Component({
  selector: 'app-associate-outbound-document-sisfv',
  templateUrl: './associate-outbound-document-SISFV.component.html',
  styleUrl: './associate-outbound-document-SISFV.component.css',
})

export class AssociateOutboundDocumentSISFVComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  
  documentsRequest: DocumentRequest[] = [
    {
      tipoDocumental: 'Tipo 1',
      fechaCreacion: new Date('2024-07-20')
    },
    {
      tipoDocumental: 'Tipo 2',
      fechaCreacion: new Date('2023-07-20')
    },
    {
      tipoDocumental: 'Tipo 3',
      fechaCreacion: new Date('2023-07-20')
    }
  ]
  documentalTypes: documentalType[] = [
    {
      id: 1,
      documentalName: 'ABC',
    },
    {
      id: 2,
      documentalName: 'ABC',
    },
    {
      id: 3,
      documentalName: 'ABC',
    },
  ];

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
  documentalTypeOptions() {
    return this.documentalTypes.map((documentalType) => {
      return { id: documentalType.documentalName, text: documentalType.documentalName };
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
