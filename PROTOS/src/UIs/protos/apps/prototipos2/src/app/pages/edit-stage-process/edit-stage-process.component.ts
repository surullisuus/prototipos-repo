import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-stage-process',
  templateUrl: './edit-stage-process.component.html',
  styleUrl: './edit-stage-process.component.css',
})
export class EditStageProcessComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  
  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}
  
  stageForm!: FormGroup;
  subscription!: Subscription;

  ngOnInit(): void {
    this.stageForm = this.fb.group({
      etapa: ['', Validators.required],  // Agregar validación requerida
    });
  }

  onSubmit() {
    if (this.stageForm.invalid) {
      this.stageForm.markAllAsTouched();  // Marcar todos los campos como tocados si el formulario es inválido
      return;
    }

    // Si el formulario es válido, mostrar el modal
    this.SaveModal();
  }
  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "Guardar etapa"
    dialogData.body = "¿Está seguro de guardar esta etapa?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onSavedModal(); 
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSavedModal(){
    const dialogData = new DialogData();
    dialogData.title = "Etapa guardada de forma exitosa";
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
          DialogAction.eventClose.emit()
          location.reload();
      })
  }
  onCloseModal() {}
}
