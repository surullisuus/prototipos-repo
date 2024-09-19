import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { ActionType, DialogAction } from '../../components/dialog/models/dialog-action';

@Component({
  selector: 'app-create-email-template',
  templateUrl: './create-email-template.component.html',
  styleUrl: './create-email-template.component.css',
})
export class CreateEmailTemplateComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

  // FormGroup para manejar el formulario reactivo
  emailTemplateForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  // Inicializar el formulario y sus validaciones
  initForm() {
    this.emailTemplateForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      asunto: ['', Validators.required],
      cuerpoCorreo: ['', Validators.required]
    });
  }

  // Getters para acceder a los campos del formulario
  get nombre() {
    return this.emailTemplateForm.get('nombre');
  }

  get descripcion() {
    return this.emailTemplateForm.get('descripcion');
  }

  get asunto() {
    return this.emailTemplateForm.get('asunto');
  }

  get cuerpoCorreo() {
    return this.emailTemplateForm.get('cuerpoCorreo');
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.emailTemplateForm.valid) {
      this.SaveModal();  // Si el formulario es válido, proceder
    } else {
      this.emailTemplateForm.markAllAsTouched();  // Marca todos los campos como tocados para mostrar los mensajes de error
    }
  }

  SaveModal() {
    const dialogData = new DialogData();
    dialogData.title = "Guardar plantilla de correo";
    dialogData.body = "¿Está seguro de querer guardar esta plantilla de correo?";
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
    dialogData.title = "Plantilla de correo guardada de forma exitosa";
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
