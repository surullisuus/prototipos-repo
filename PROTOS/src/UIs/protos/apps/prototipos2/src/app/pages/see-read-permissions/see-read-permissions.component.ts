import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
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

  opciones = [
    { id: 1, text: 'Terminado' },
    { id: 2, text: 'En ejecución' },
  ];

  groups = [
    {
      name: 'Usuario interno',
      id: 1,
      role: 'ABC',
      permisos: [
        { name: 'Ver documento', id: 1 },
        { name: 'Borrar documento', id: 2 },
      ],
    },
    {
      name: 'Usuario externo',
      id: 2,
      role: 'ABC',
      permisos: [
        { name: 'Ver documento', id: 1 },
        { name: 'Borrar documento', id: 2 },
      ],
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
  }

  onSearchButton() {
    this.clickedSearchButton = true;
    if (this.form.invalid) {
      this.showErrorAlertState();
    }
  }

  onCleanInputs() {
    this.clickedSearchNumberApplication = false;
    this.clickedSearchButton = false;
    this.form.reset();
  }

  showErrorAlertState() {
    const dialogData = new DialogData();
    dialogData.title = `No se encontraron resultados que coincidan con la información suministrada y la opción ${"Cerrar"}`;
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
