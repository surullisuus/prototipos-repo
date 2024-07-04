import { Component, ViewChild, ViewContainerRef, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-see-read-permissions',
  templateUrl: './see-read-permissions.component.html',
  styleUrls: ['./see-read-permissions.component.css'],
})
export class SeeReadPermissionsComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;


  form!: FormGroup;
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

  constructor(private fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      usuario: [null],
      numeroSolicitud: [null],
      etapa: [null],
    });
  }

  onSearchNumberApplication() {
    this.clickedSearchNumberApplication = true;
    // buscar por numero de solicitud
  }


  onSearchButton() {
    this.clickedSearchButton = true;
  }

  onCleanInputs() {
    this.clickedSearchNumberApplication = false;
    this.clickedSearchButton = false;
    this.form.reset();
  }

  onRadioChange() {
    const userType = this.form.get('usuario')?.value;
    this.isExternalUser = userType === 'externo';
    this.clickedSearchNumberApplication = false;
    this.clickedSearchButton = false;
  }

  showErrorAlertState() {
    const dialogData = new DialogData();
    dialogData.title = `No se encontraron resultados que coincidan con la información suministrada y la opción ${'Cerrar'}`;
    dialogData.type = DialogType.danger;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
      });
  }
}
