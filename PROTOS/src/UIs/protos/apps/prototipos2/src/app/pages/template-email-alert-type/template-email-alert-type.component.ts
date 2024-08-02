import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-template-email-alert-type',
  templateUrl: './template-email-alert-type.component.html',
  styleUrls: ['./template-email-alert-type.component.css'
  ],
})
export class TemplateEmailAlertTypeComponent {

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;


  formQueryScheme!: FormGroup;
  constructor( private readonly fb: FormBuilder,
    private dialogService: DialogService,
    private router: Router
  ){}
    
  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
    }

    initForm(): FormGroup {
      return this.fb.group({
        razon: [""],
        tipoId: [null],
        id: [null],
        tipoParte:["5"],
        direccion: [null],
        telefono: [""],
        correo: [""],
        departamento:["5"],
        municipio:["5"],
        aceptaTratamiento:[false],
        fileUpload: [{ value: '', disabled: true }]
         });
      
    }


    onSaveModal(){
     
      const dialogData = new DialogData();
      dialogData.title="¿Está seguro de asociar la plantilla de correo al tipo de alerta?"
      dialogData.textButtonCancel = "Cerrar";
      dialogData.type = DialogType.warning;
    
      this.dialogService.resultActionModal
      this.subscription = this.dialogService
        .openModal(this.dialog, dialogData)
        .subscribe((dialogAction: DialogAction) => {
          if (dialogAction.action === ActionType.confirm) {
         
            this.onShowSuccessModal()
           
          } else {
            dialogAction.eventClose.emit();
          }
        });
    }

    onShowSuccessModal(){
     
      const dialogData = new DialogData();
      dialogData.title="Transacción exitosa."
      dialogData.type = DialogType.success;
         dialogData.buttonCancel=false
    
      this.dialogService.resultActionModal
      this.subscription = this.dialogService
        .openModal(this.dialog, dialogData)
        .subscribe((dialogAction: DialogAction) => {
          if (dialogAction.action === ActionType.confirm) {
            dialogAction.eventClose.emit();
           
          } 
        });
    }

    onAsociarPlantillaAlreadyPresent($event: Event) {
      $event.preventDefault();
  
      const dialogData = new DialogData();
       dialogData.title = "El tipo de alerta ya tiene una plantilla de correo asociada ¿Desea modificarla?";
      dialogData.textButtonCancel = 'Cancelar';
      dialogData.type = DialogType.danger;
  
      this.subscription = this.dialogService
        .openModal(this.dialog, dialogData)
        .subscribe((dialogAction: DialogAction) => {
          if (dialogAction.action === ActionType.confirm) {
            const body = "Transacción exitosa.";
            dialogAction.eventClose.emit();
            this.showSuccessTaskInitializationAlertState(body);
          } else {
            dialogAction.eventClose.emit();
          }
        });
    }
    showSuccessTaskInitializationAlertState(body: string) {
      const dialogData = new DialogData();
      dialogData.title = body;
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

}