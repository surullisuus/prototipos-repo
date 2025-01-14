import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-consult-file',
  templateUrl: './consult-file.component.html',
  styleUrls: ['./consult-file.component.css'],
})
export class ConsultFileComponent implements OnInit {
  formQueryScheme!: FormGroup;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  documentId: string | undefined;
  subscription!: Subscription;
  radicados = [
    {
      id: '232',
      numeroRadicado: '123',
    },
    {
      id: '233',
      numeroRadicado: '456',
    },
  ];
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      numeroRadicado: [null],
    });
  }

  onBuscar(): void {
    console.log(this.formQueryScheme.value);
    // si no se encuentra, mostrar alerta de error

    this.showAlertState('No existe información asociada con los filtros seleccionados', DialogType.warning);
  }

  onLimpiar(): void {
    this.formQueryScheme.reset();
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
        dialogAction.eventClose.emit();
        location.reload();
      });
  }

  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortColumn = column;

    this.radicados.sort((a, b) => {
      const valueA = a[column as keyof typeof a];
      const valueB = b[column as keyof typeof b];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      }
      if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }
}
