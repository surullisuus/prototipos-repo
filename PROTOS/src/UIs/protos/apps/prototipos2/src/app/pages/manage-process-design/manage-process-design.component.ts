import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { Modal } from '@protos/lib';

@Component({
  selector: 'manage-process-design',
  templateUrl: './manage-process-design.component.html',
  styleUrls: ['./manage-process-design.component.css'],
})
export class ManageProcessDesignComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('openbutton') openbutton!: ElementRef;

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

  partes = [
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Entrada',
      estadoDocumento: 'Radicado',
      numeroRadicado: 12345678,
      fechaRadicacion: '2022-01-01',
      numerado: '2022-01-01',
      fechado: '2022-01-01',
      seleccionar: true,
    },
    {
      nombreArchivo: 'DEF',
      tipoDocumento: 'Entrada',
      estadoDocumento: 'Radicado',
      numeroRadicado: 12345678,
      fechaRadicacion: '2022-01-01',
      numerado: '2022-01-01',
      fechado: '2022-01-01',
      seleccionar: true,
    },
    {
      nombreArchivo: 'GHI',
      tipoDocumento: 'Entrada',
      estadoDocumento: 'Radicado',
      numeroRadicado: 12345678,
      fechaRadicacion: '2022-01-01',
      numerado: '2022-01-01',
      fechado: '2022-01-01',
      seleccionar: true,
    },
  ];

  formQueryScheme!: FormGroup;
  public preliminarTab1Visible: boolean = false;

  isDisabledSubmit = false;
  subscription!: Subscription;
  public activeTab: number | undefined = undefined;
  public isDialogVisible: boolean = false;

  constructor(
    private readonly fb: FormBuilder,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  public setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  public isTabActive(tabIndex: number): boolean {
    return this.activeTab === tabIndex;
  }

  public showPreliminarTab1(): void {
    this.preliminarTab1Visible = !this.preliminarTab1Visible;
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }

  //mostrar primer modal
  showModal(event: Event) {
    event.preventDefault();
    const dialogData = new DialogData();
    //llenar datos del modal
    dialogData.title = this.modalData.preliminar.title;
    dialogData.body = this.modalData.preliminar.body;
    dialogData.textButtonCancel = this.modalData.preliminar.textButtonCancel;
    dialogData.textButtonConfirm = this.modalData.preliminar.textButtonConfirm;
    dialogData.type = this.modalData.preliminar.type;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.showModalSaveDocument(event);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  //mostrar segundo modal
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
