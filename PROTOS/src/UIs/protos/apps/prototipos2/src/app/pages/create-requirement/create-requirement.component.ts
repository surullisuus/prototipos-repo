import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface QuerySelect {
  text: string;
  value: number;
}


@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.css'],
})
export class CreateRequirementComponent {
   

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonclose') openbuttonclose!: ElementRef;


  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService) {  }


  subscription!: Subscription;
  formQueryScheme!: FormGroup;
  typesListProcess: QuerySelect[] = [];
  typesListStage: QuerySelect[] = [];


  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
   
  }

  initForm(): FormGroup {
    this.initList()
    return this.fb.group({
      proceso: ["2", Validators.required],  // Campo requerido
      etapa: ["2", Validators.required],    // Campo requerido
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
    dialogData.title = "El requisito fue creado con éxito";
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
