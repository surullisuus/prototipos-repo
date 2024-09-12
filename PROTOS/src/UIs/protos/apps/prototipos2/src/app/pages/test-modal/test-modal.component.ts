import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormGroup, FormBuilder } from '@angular/forms';


interface QuerySelect {
  text: string;
  value: number;
}
@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrl: './test-modal.component.css',
})


export class TestModalComponent implements AfterViewInit {
  formQueryScheme!: FormGroup;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonApproveDocument')
  openbuttonApproveDocument!: ElementRef;
  @ViewChild('openbuttonRechazarDocument')
  openbuttonRechazarDocument!: ElementRef;
  @ViewChild('openbutton') openbutton!: ElementRef;
  @ViewChild('openbuttonRadicarDocument') openbuttonRadicarDocument!: ElementRef;

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
      estado: 'Aprobado',
    },
    {
      documentId: '456',
      proceso: 'proceso B',
      tipoDocumental: '123',
      nombreDocumento: 'Documento 2',
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'Por Firma',
    },
    {
      documentId: '789',
      proceso: 'proceso C',
      tipoDocumental: '123',
      nombreDocumento: 'Documento 3',
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'Aprobado',
    },
    {
      documentId: '223',
      proceso: 'proceso D',
      tipoDocumental: '222',
      nombreDocumento: 'Documento 4',
      fechaInicio: '01/01/2022',
      fechaFin: '01/01/2022',
      estado: 'Por Firma',
    },
  ];

  data: any = {
    noSolicitud: 'aaaa',
  };
  typeProcess!: QuerySelect[]
  typesDocumental!: QuerySelect[]
  states!: QuerySelect[]

  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initList();
    this.formQueryScheme = this.initForm();
  }
  ngAfterViewInit(): void {
    // this.openbuttonApproveDocument.nativeElement.click();
  }

  initList() {
    this.typeProcess = [
      { text: 'Proceso A', value: 1 },
      { text: 'Proceso B', value: 2 },
      { text: 'Proceso C', value: 3 },
      { text: 'Proceso D', value: 4 }
    ];

    this.typesDocumental = [
      { text: 'Tipo Documental 1', value: 1 },
      { text: 'Tipo Documental 2', value: 2 },
      { text: 'Tipo Documental 3', value: 3 },
      { text: 'Tipo Documental 4', value: 4 }
    ];

    this.states = [
      { text: 'Aprobado', value: 1 },
      { text: 'En Revisión', value: 2 },
      { text: 'Enviado', value: 3 },
      { text: 'Por Firma', value: 3 },


    ];


  }

  initForm(): FormGroup {
    return this.fb.group({
      proceso: ["1"],
      tipoDocumental: ["1"],
      nombreDocumento: [null],
      estado: ["1"],
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

  onSign(documentId: string): void {
    this.openbutton.nativeElement.click()
  }

  onRadicar(documentId: string): void {
    const dialogData = new DialogData();
    dialogData.title = "¿Está seguro de radicar el documento?";
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (
          dialogAction.action === ActionType.confirm
        ) { this.openbuttonRadicarDocument.nativeElement.click(); }
        else {
          dialogAction.eventClose.emit();
        }
      })

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
          this.openbuttonRechazarDocument.nativeElement.click();
          dialogAction.eventClose.emit();
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }
}
