import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import {
  ActionType,
  DialogAction,
} from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-consult-documents',
  templateUrl: './consult-documents.component.html',
  styleUrls: ['./consult-documents.component.css'],
})
export class ConsultDocumentsComponent implements AfterViewInit {
  formQueryScheme!: FormGroup;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonApproveDocument')
  openbuttonApproveDocument!: ElementRef;
  @ViewChild('openbuttonRechazarDocument')
  openbuttonRechazarDocument!: ElementRef;

  documentId: string | undefined;
  subscription!: Subscription;
  documentos = [
    {
      documentId: '123',
      proceso: 'proceso A',
      tipoDocumental: '123',
      nombreDocumento: 'Documento 1',
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'ABC',
    },
    {
      documentId: '456',
      proceso: 'proceso B',
      tipoDocumental: '123',
      nombreDocumento: 'Documento 1',
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'ABC',
    },
    {
      documentId: '789',
      proceso: 'proceso C',
      tipoDocumental: '123',
      nombreDocumento: 'Documento 1',
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'ABC',
    },
  ];

  data: any = {
    noSolicitud: 'aaaa',
  };

  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }
  ngAfterViewInit(): void {
    // this.openbuttonApproveDocument.nativeElement.click();
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

  onAprobar(documentId: string): void {
    console.log(documentId);
    this.documentId = documentId;

    this.showDialogDocument('aprobar', '¿Está seguro de APROBAR el documento?');

  }

  onRechazar(): void {
    this.showDialogDocument(
      'rechazar',
      '¿Está seguro de RECHAZAR el documento?'
    );
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

  showDialogDocument(accion: string, title: string) {
    const dialogData = new DialogData();
    dialogData.title = title;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (
          dialogAction.action === ActionType.confirm &&
          accion === 'aprobar'
        ) {
          this.openbuttonApproveDocument.nativeElement.click();
          dialogAction.eventClose.emit();
        } else if (
          dialogAction.action === ActionType.confirm &&
          accion === 'rechazar'
        ) {
          dialogAction.eventClose.emit();
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }
}
