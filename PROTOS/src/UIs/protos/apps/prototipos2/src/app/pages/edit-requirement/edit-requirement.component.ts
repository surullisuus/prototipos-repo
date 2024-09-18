import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface QuerySelect {
  text: string;
  value: number;
}

@Component({
  selector: 'app-edit-requirement',
  templateUrl: './edit-requirement.component.html',
  styleUrls: ['./edit-requirement.component.css'],
})
export class EditRequirementComponent {


  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonclose') openbuttonclose!: ElementRef;

  typesListProcess: QuerySelect[] = [];
  typesListStage: QuerySelect[] = [];
  formQueryScheme!: FormGroup;

  constructor(private dialogService: DialogService,
    private readonly fb: FormBuilder,
  ) {  }


  subscription!: Subscription;


  
  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
   
  }

  initForm(): FormGroup {
    this.initList()
    return this.fb.group({
      proceso: [{ value: 2, disabled: true }],  
      etapa: [{ value: 2, disabled: true }],    
      requisito: [null, Validators.required]  // Campo requerido
       });
    
  }
  
  initList(){
    this.typesListProcess = [
      { text: 'Proceso 1', value: 1 },
      { text: 'Proceso 2', value: 2 },
      { text: 'Proceso 3', value: 3 },
      { text: 'Proceso 4', value: 4 }
    ];
  
    this.typesListStage = [
      { text: 'Etapa uno', value: 1 },
      { text: 'Etapa dos', value: 2 },
      { text: 'Etapa tres', value: 3 },
      { text: 'Etapa cuatro', value: 4 }
    ];
  
  }
  
  showSuccessAlert() {
    const dialogData = new DialogData();
    dialogData.title = "El requisito fue modificado con éxito";
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

  onCloseModal(){}
}
