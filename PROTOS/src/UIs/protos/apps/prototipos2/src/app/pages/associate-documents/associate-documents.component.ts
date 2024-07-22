import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';

@Component({
  selector: 'app-associate-documents',
  templateUrl: './associate-documents.component.html',
  styleUrl: './associate-documents.component.css',
})
export class AssociateDocumentsComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  public data = [
    {
      id: 1,
      numeroRadicado: '234',
      fechaRadicacion: '01/12/2022',
      seleccionado: false,
    },
    {
      id: 2,
      numeroRadicado: '235',
      fechaRadicacion: '01/12/2022',
      seleccionado: false,
    },
  ];
  subscription!: Subscription;
  formQueryScheme!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }

  onAssociateDocuments() {
    //si la asociacion fue exitosa mostrar alerta de exito
    this.showAlertState(
      'Documentos asociados exitosamente',
      DialogType.success
    );
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