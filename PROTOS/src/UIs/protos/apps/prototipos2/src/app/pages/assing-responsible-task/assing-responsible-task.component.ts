import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';

interface TaskAssing {
  nombre: string;
  rol: string;
  tarea: string;
}

@Component({
  selector: 'app-assing-responsible-task',
  templateUrl: './assing-responsible-task.component.html',
  styleUrls: ['./assing-responsible-task.component.css'],
})
export class AssingResponsibleTaskComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

  taskAssign: TaskAssing[] = [
    {
      nombre: 'Juan Felipe Lopez',
      rol: 'Administrador',
      tarea: 'Tarea 1',
    },
    {
      nombre: 'Daniela Cerón',
      rol: 'Administrador',
      tarea: 'Tarea 2',
    },
    {
      nombre: 'Helena Cárdenas ',
      rol: 'Usuario',
      tarea: 'Tarea 3',
    },
  ];

  formQueryTasks!: FormGroup;
  subscription!: Subscription;
  sortColumn = ''; // Columna por la que se está ordenando
  sortDirection: 'asc' | 'desc' = 'asc'; // Dirección de ordenamiento

  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.formQueryTasks = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      Grupo: ['Titulación y saneamiento predial'],
      Proceso: ['Cancelación de gravamenes'],
      nosolicitud: [2123132],
    });
  }

  onAssignTaskModal(item: any) {
    const dialogData = new DialogData();
    dialogData.title = 'Asignar Responsable';
    dialogData.body =
      '¿Está seguro de asignar al usuario ' +
      item.nombre +
      ' la tarea ' +
      "'" +
      item.tarea +
      "' " +
      ' ?';
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.warning;

    this.dialogService.resultActionModal;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.showSuccessAlert(item);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showSuccessAlert(item: any) {
    const dialogData = new DialogData();
    dialogData.title =
      'Se asignó la tarea ' +
      "'" +
      item.tarea +
      "'" +
      ' al usuario ' +
      item.nombre +
      ' de forma éxitosa.';
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

  sortTable(column: string) {
    if (this.sortColumn === column) {
      // Alternar la dirección si la columna es la misma
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Si es una nueva columna, ordenar en ascendente
      this.sortDirection = 'asc';
    }
    this.sortColumn = column;

    this.taskAssign.sort((a, b) => {
      const valueA = a[column as keyof TaskAssing];
      const valueB = b[column as keyof TaskAssing];

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
