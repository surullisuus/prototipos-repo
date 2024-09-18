import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import {
  ActionType,
  DialogAction,
} from '../../components/dialog/models/dialog-action';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-see-read-permissions',
  templateUrl: './see-read-permissions.component.html',
  styleUrls: ['./see-read-permissions.component.css'],
})
export class SeeReadPermissionsComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonPermisosLectura')
  openbuttonPermisosLectura!: ElementRef;
  @ViewChild('openbuttonPermisosRoles') openbuttonPermisosRoles!: ElementRef;
  @ViewChild('openbuttonpermisosLecturaInternoModal') openbuttonpermisosLecturaInternoModal!: ElementRef;
  @ViewChild('openbuttonaddRolesModal') openbuttonaddRolesModal!: ElementRef;

  form: FormGroup;
  subscription!: Subscription;
  clickedSearchNumberApplication = false;
  clickedSearchButton = false;
  isExternalUser = false;

  opciones = [
    { id: 1, text: 'Terminado' },
    { id: 2, text: 'En ejecución' },
  ];

  internalGroups = [
    {
      name: 'Usuario interno',
      id: 1,
      role: 'ABC',
      selected: true,
    },
    {
      name: 'Usuario interno',
      id: 2,
      role: 'ABC',
      selected: true,
    },
    {
      name: 'Usuario interno',
      id: 3,
      role: 'ABC',
      selected: false,
    },
  ];
  internalGroupsPermissions = [
    {
      actuacion: 'ABC',
      id: 2,
      nombreArchivo: 'XYZ',
      tipoDocumento: 'Salida',
      lectura: false,
    },
    {
      actuacion: 'ABC',
      id: 3,
      nombreArchivo: 'XYZ',
      tipoDocumento: 'Salida',
      lectura: true,
    },
    {
      actuacion: 'ABC',
      id: 4,
      nombreArchivo: 'XYZ',
      tipoDocumento: 'Salida',
      lectura: true,
    },
  ];
  externalGroups = [
    {
      actuacion: 'ABC',
      id: 2,
      nombreArchivo: 'XYZ',
      tipoDocumento: 'Salida',
      lectura: false,
    },
    {
      actuacion: 'ABC',
      id: 3,
      nombreArchivo: 'XYZ',
      tipoDocumento: 'Salida',
      lectura: true,
    },
    {
      actuacion: 'ABC',
      id: 4,
      nombreArchivo: 'XYZ',
      tipoDocumento: 'Salida',
      lectura: true,
    },
  ];

  constructor(private fb: FormBuilder, private dialogService: DialogService) {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      numeroSolicitud: [null],
      etapa: [null],
      usuario: [null],
    });
  }

  ngOnInit(): void {}

  get searchIconStyle() {
    return {
      'font-size': '1.4rem',
      'color': this.form.get('numeroSolicitud')?.value ? '#3366CC' : '#A0A0A0',
      'cursor': this.form.get('numeroSolicitud')?.value ? 'pointer' : ''
    };
  }

  get isSearchButtonDisabled(): boolean {
    const usuario = this.form.get('usuario')?.value;
    const numeroSolicitud = this.form.get('numeroSolicitud')?.value;
    const etapa = this.form.get('etapa')?.value;

    if (usuario === 'interno' && !etapa) {
      return true;
    }

    if (usuario === 'externo' && !numeroSolicitud) {
      return true;
    }

    return false;
  }

  onRadioChange(): void {
    const userType = this.form.get('usuario')?.value;
    this.isExternalUser = userType === 'externo';
    this.clickedSearchNumberApplication = false;
    this.clickedSearchButton = false;
  }

  onSearchNumberApplication(): void {
    this.clickedSearchNumberApplication = true;
    // buscar por numero de solicitud
    // si no se encuentra, mostrar alerta de error
    //showAlertState('No se encontraron resultados que coincidan con la información suministrada y la opción Cerrar');
  }

  onSearchButton(): void {
    if (!this.isExternalUser) {
      if (this.openbuttonPermisosRoles) {
        this.openbuttonPermisosRoles.nativeElement.click();
      }
    } else {
      if (this.openbuttonPermisosLectura) {
        this.openbuttonPermisosLectura.nativeElement.click();
      }
    }
  }

  onCleanInputs(): void {
    this.form.get('numeroSolicitud')?.setValue(null);
  }

  onDropdownChange(event: any): void {
    this.form.get('etapa')?.setValue(event);
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

  showModalApplyPermissions = () => {
    const dialogData = new DialogData();
    dialogData.title = `¿Está seguro actualizar los permisos de lectura?`;
    dialogData.type = DialogType.warning;
    dialogData.buttonConfirm = true;
    dialogData.textButtonConfirm = 'Aceptar';
    dialogData.textButtonCancel = 'Cancelar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          //aplicar permisos en bd
          dialogAction.eventClose.emit();
          this.showAlertState(
            'Configuración guardada exitosamente',
            DialogType.success
          );
        } else {
          dialogAction.eventClose.emit();
          this.openbuttonpermisosLecturaInternoModal.nativeElement.click();

        }
      });
  };

  showModalAddPermissions = () => {
    const dialogData = new DialogData();
    dialogData.title = `¿Está seguro de añadir los roles?`;
    dialogData.type = DialogType.warning;
    dialogData.buttonConfirm = true;
    dialogData.textButtonConfirm = 'Aceptar';
    dialogData.textButtonCancel = 'Cancelar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          //añadir permisos en bd
          dialogAction.eventClose.emit();
          this.showAlertState(
            'Roles añadidos exitosamente',
            DialogType.success
          );
        } else {
          dialogAction.eventClose.emit();
          this.openbuttonaddRolesModal.nativeElement.click();

        }
      });
  };

  showModalDeleteRegister = (internalId: number) => {
    const dialogData = new DialogData();
    dialogData.title = `¿Está seguro de que desea eliminar el registro?`;
    dialogData.type = DialogType.warning;
    dialogData.buttonConfirm = true;
    dialogData.textButtonConfirm = 'Aceptar';
    dialogData.textButtonCancel = 'Cancelar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          //borrar registro en bd
          const index = this.internalGroups.findIndex(
            (item) => item.id === internalId
          );
          if (index !== -1) {
            this.internalGroups.splice(index, 1);
          }
          dialogAction.eventClose.emit();
          this.showAlertState(
            'Registro eliminado de forma exitosa',
            DialogType.success
          );
        } else {
          dialogAction.eventClose.emit();
          this.openbuttonPermisosRoles.nativeElement.click();
        }
      });
  };
}
