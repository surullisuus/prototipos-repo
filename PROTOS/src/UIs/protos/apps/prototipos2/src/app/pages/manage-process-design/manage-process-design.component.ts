import {
    Component,
    ElementRef,
    ViewChild,
    ViewContainerRef,
  } from '@angular/core';
  import { FormBuilder, FormGroup } from '@angular/forms';
  import { Subscription } from 'rxjs';
  import { DialogService } from '../../components/dialog/services/dialog.service';
  import { DialogData } from '../../components/dialog/models/dialog-data';
  import { DialogType } from '../../components/dialog/models/dialog-type';
  import { DialogAction } from '../../components/dialog/models/dialog-action';
  import { ActionType } from '../../components/dialog/models/action-type.enum';

  @Component({
    selector: 'manage-process-design',
    templateUrl: './manage-process-design.component.html',
    styleUrls: ['./manage-process-design.component.css'],
  })
  export class ManageProcessDesignComponent {
    @ViewChild('openbuttongenerateExitDocument')
    openbuttongenerateExitDocument!: ElementRef;
    @ViewChild('openbuttonassociateEntryDoc')
    openbuttonassociateEntryDoc!: ElementRef;
    @ViewChild('openbuttonviewDocument')
    openbuttonviewDocument!: ElementRef;
    @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

    @ViewChild('closeViewDocumentModal') closeViewDocumentModal!: ElementRef;

    isDisabledSubmit = false;
    subscription!: Subscription;

    radicados = [
      {
        numeroRadicado: 123,
        fechaRadicacion: '01/01/2022',
        seleccionar: true,
      },
      {
        numeroRadicado: 456,
        fechaRadicacion: '02/01/2022',
        seleccionar: true,
      },
    ];

    partes = [
        {
          id: '1',
          nombreArchivo: 'ABC',
          tipoDocumento: 'Entrada',
          estadoDocumento: 'Radicado',
          numeroRadicado: 456,
          fechaRadicacion: '01/01/2022',
          numerado: '-',
          fechado: '-',
          seleccionar: true,
        },
        {
          id: '2',
          nombreArchivo: 'ABC',
          tipoDocumento: 'Salida',
          estadoDocumento: 'Proyectado',
          numeroRadicado: '-',
          fechaRadicacion: '-',
          numerado: '-',
          fechado: '-',
          seleccionar: true,
        },
        {
          id: '3',
          nombreArchivo: 'ABC',
          tipoDocumento: 'Salida',
          estadoDocumento: 'Por revisar',
          numeroRadicado: '-',
          fechaRadicacion: '-',
          numerado: '-',
          fechado: '-',
          seleccionar: true,
        },
        {
          id: '4',
          nombreArchivo: 'ABC',
          tipoDocumento: 'Salida',
          estadoDocumento: 'Firmado',
          numeroRadicado: '-',
          fechaRadicacion: '-',
          numerado: '-',
          fechado: '-',
          seleccionar: true,
        },
        {
          id: '5',
          nombreArchivo: 'ABC',
          tipoDocumento: 'Salida',
          estadoDocumento: 'Radicado',
          numeroRadicado: 123,
          fechaRadicacion: '05/01/2022',
          numerado: '-',
          fechado: '-',
          seleccionar: true,
        },
        {
          id: '6',
          nombreArchivo: 'ABC',
          tipoDocumento: 'Salida',
          estadoDocumento: 'Publicado',
          numeroRadicado: '-',
          fechaRadicacion: '-',
          numerado: '2020-GTC-0512-001',
          fechado: '07/01/2022',
          seleccionar: true,
        },
      ];

    formQueryScheme!: FormGroup;
    public preliminarTab1Visible: boolean = false;

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

    onGenerateExitDocument() {
      if (this.openbuttongenerateExitDocument) {
        this.openbuttongenerateExitDocument.nativeElement.click();
      }
    }
    onAssociateEntryDoc() {
      if (this.openbuttonassociateEntryDoc) {
        this.openbuttonassociateEntryDoc.nativeElement.click();
      }
    }

    deleteDocument(id: string, event: Event) {
      this.onDeleteDocument(id, event);
    }

    viewDocument(id: string, event: Event) {
      this.showViewDocumentModal(id, event);
    }

    onDeleteDocument(itemId: string, event: Event) {
      event.preventDefault();

      const dialogData = new DialogData();
      dialogData.title = 'Borrar documentos de Entrada/Salida';
      dialogData.body = '¿Está seguro de eliminar el documento?';
      dialogData.textButtonCancel = 'Cancelar';
      dialogData.textButtonConfirm = 'Aceptar';
      dialogData.type = DialogType.warning;

      this.subscription = this.dialogService
        .openModal(this.dialog, dialogData)
        .subscribe((dialogAction: DialogAction) => {
          if (dialogAction.action === ActionType.confirm) {
            //borrar documento en bd
            dialogAction.eventClose.emit();
            this.showSuccessAlertState('Documentado borrado con éxito');
          } else {
            dialogAction.eventClose.emit();
          }
        });
    }

    showViewDocumentModal(id:string,event: Event) {
      event.preventDefault();
      if (this.openbuttonviewDocument) {
          this.openbuttonviewDocument.nativeElement.click();
        }
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
