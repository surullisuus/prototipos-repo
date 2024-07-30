import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface TaskRequest{
  fecha: Date;
  asociadoPor: String;
  comentario: String;
}

@Component({
  selector: 'app-task-comments-view',
  templateUrl: './task-comments-view.component.html',
  styleUrl: './task-comments-view.component.css',
})
export class TaskCommentsViewComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  tasksRequest: TaskRequest[] = [
    {
      fecha: new Date('2023-07-20'),
      asociadoPor: 'ABC',
      comentario: 'Comentario 1'
    },
    {
      fecha: new Date('2024-05-28'),
      asociadoPor: 'ABC',
      comentario: 'Comentario 3'
    },
    {
      fecha: new Date('2024-07-29'),
      asociadoPor: 'ABC',
      comentario: 'Comentario 2'
    }
  ]

  subscription!: Subscription;
  fromQueryScheme!: FormGroup;

  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}
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

  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "Asociar comentario a tarea";
    dialogData.body = "¿Esta seguro de asociar el comentario a la tarea?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSavedModal(); 
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal() {
    const dialogData = new DialogData();
    dialogData.title = "Comentario asociado de forma exitosa";
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
          DialogAction.eventClose.emit()
          location.reload();
      });
  }
}
