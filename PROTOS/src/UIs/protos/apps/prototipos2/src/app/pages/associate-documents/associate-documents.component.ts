import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { ActionType, DialogAction } from '../../components/dialog/models/dialog-action';

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
      numeroRadicado: '123',
      seleccionado: false,
    },
    {
      id: 2,
      numeroRadicado: '456',
      seleccionado: true,
    },
    {
      id: 3,
      numeroRadicado: '789',
      seleccionado: true,
    },
  ];
  subscription!: Subscription;
  formQueryScheme!: FormGroup;

  sortColumnName: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      noRadicado: [null],
      fechaInicio: [null],
      fechaFin: [null],
    });
  }

  onSearchDocuments() {
    this.showAlertState('No existe información asociada con los filtros seleccionados', DialogType.warning);
  }

  onLimpiar(){
    this.formQueryScheme.reset();
  }

  onAssociateAlert(){
      const dialogData = new DialogData();
      dialogData.title = '¿Está seguro que desea asociar los documentos?'
      dialogData.textButtonCancel = "Cancelar";
      dialogData.type = DialogType.warning;

      this.subscription = this.dialogService
        .openModal(this.dialog, dialogData)
        .subscribe((dialogAction: DialogAction) => {
          if (dialogAction.action === ActionType.confirm) {
            dialogAction.eventClose.emit();
            this.showAlertState(
                'Documentos asociados exitosamente',
                DialogType.success
              )
          } else {
            dialogAction.eventClose.emit();
          }
        });
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

  sortColumn(columnName: string) {
    if (this.sortColumnName === columnName) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumnName = columnName;
      this.sortOrder = 'asc';
    }
    this.data.sort((a: any, b: any) => {
      const aValue = a[columnName].toString().toLowerCase();
      const bValue = b[columnName].toString().toLowerCase();
      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
