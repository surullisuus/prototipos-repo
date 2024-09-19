import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

interface TaskRequest {
  fecha: Date;
  asociadoPor: string;
  comentario: string;
}

@Component({
  selector: 'app-task-comments-view',
  templateUrl: './task-comments-view.component.html',
  styleUrls: ['./task-comments-view.component.css'],
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
  ];

  subscription!: Subscription;
  commentForm!: FormGroup;

  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.commentForm = this.fb.group({
      comentario: ['', Validators.required],  // Agregar validación requerida
    });
  }

  onSubmit() {
    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();  // Marcar todos los campos como tocados si el formulario es inválido
      return;
    }

    // Si el formulario es válido, mostrar el modal
    this.SaveModal();
  }

  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = 'Asociar comentario a tarea';
    dialogData.body = '¿Está seguro de asociar el comentario a la tarea?';
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.textButtonConfirm = 'Aceptar';
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
    dialogData.title = 'Comentario asociado de forma exitosa';
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
}
