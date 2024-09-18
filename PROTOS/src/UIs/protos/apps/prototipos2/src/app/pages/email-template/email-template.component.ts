import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface TemplateRequest {
  id: number;
  nombreProceso: string;
  tema: string;
  nombrePlantilla: string;
}
interface processOption {
  processName: string;
}
interface themeOption {
  themeName: string;
}
@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrl: './email-template.component.css',
})
export class EmailTemplateComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  templatesRequests: TemplateRequest[] = [
    {
      id: 123,
      nombreProceso: 'Proceso 1',
      tema: 'Tema 1',
      nombrePlantilla: 'Plantilla 1',
    },
    {
      id: 234,
      nombreProceso: 'Proceso 2',
      tema: 'Tema 2',
      nombrePlantilla: 'Plantilla 2',
    },
    {
      id: 345,
      nombreProceso: 'Proceso 3',
      tema: 'Tema 3',
      nombrePlantilla: 'Plantilla 3',
    },
  ];
  fromQueryScheme!: FormGroup;
  isDisabledSubmit = false;
  subscription!: Subscription;
  processTypes: processOption[] = [
    {
      processName: 'ABC',
    },
    {
      processName: 'ABC',
    },
    {
      processName: 'ABC',
    },
  ];
  themeTypes: themeOption[] = [
    {
      themeName: 'ABC',
    },
    {
      themeName: 'ABC',
    },
    {
      themeName: 'ABC',
    },
  ];
  processOptions() {
    return this.processTypes.map((processOption) => {
      return { id: processOption.processName, text: processOption.processName };
    });
  }
  themeOptions() {
    return this.themeTypes.map((themeOption) => {
      return { id: themeOption.themeName, text: themeOption.themeName };
    });
  }
  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) {}
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
  AcceptModal() {
    const dialogData = new DialogData();
    dialogData.title = 'Eliminar registro';
    dialogData.body = '¿Está seguro que desea eliminar el registro?';
    dialogData.textButtonConfirm = 'Aceptar';
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onAcceptedModal();
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onAcceptedModal() {
    const dialogData = new DialogData();
    dialogData.title = 'Registro eliminado de forma exitosa';
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
        DialogAction.eventClose.emit();
        location.reload();
      });
  }
  onCloseModal() {}
}
