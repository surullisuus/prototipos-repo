import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-consult-documents',
  templateUrl: './consult-documents.component.html',
  styleUrls: ['./consult-documents.component.css'],
})
export class ConsultDocumentsComponent {
  formQueryScheme!: FormGroup;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  documentId: string | undefined;
  subscription!: Subscription;
  documentos = [
    {
      proceso: 'proceso A',
      tipoDocumental: '123',
      nombreDocumento:"Documento 1",
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'ABC',
    },
    {
      proceso: 'proceso B',
      tipoDocumental: '123',
      nombreDocumento:"Documento 1",
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'ABC',
    },
    {
      proceso: 'proceso C',
      tipoDocumental: '123',
      nombreDocumento:"Documento 1",
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'ABC',
    },
  ];

  data:any={
    noSolicitud:"aaaa"
  }

  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      proceso: [null],
      tipoDocumental: [null],
      nombreDocumento: [null],
      estado: [null],
      fechaInicio: [null],
      fechaFin: [null],
    });
  }

  onBuscar(): void {
    console.log(this.formQueryScheme.value);
    // si no se encuentra, mostrar alerta de error

    //this.showAlertState('No existe información asociada con los filtros seleccionados', DialogType.danger);
  }
  onExportar(): void {
    // logica para exportar en archivo xlsx dependiendo de filtros seleccionados
  }

  onLimpiar(): void {
    this.formQueryScheme.patchValue({
      proceso: '',
      numeroRadicado: '',
      tipoDocumento: '',
      fechaInicio: null,
      fechaFin: null,
    });
  }

  setDocumentId(value: string | undefined) {
    this.documentId = value;
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
