import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
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
  selector: 'app-close-stage',
  templateUrl: './close-stage.component.html',
  styleUrl: './close-stage.component.css',
})
export class CloseStageComponent {

  

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonclose') openbuttonclose!: ElementRef;

  constructor(private dialogService: DialogService,
    private readonly fb: FormBuilder,
  ) {  }


  subscription!: Subscription;
  typesListMotive: QuerySelect[] = [];
  formQueryScheme!: FormGroup;


  showSuccessAlert() {
    const dialogData = new DialogData();
    dialogData.title = "La etapa fue cerrada de forma anormal con éxito";
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

  ngOnInit(): void {
    this.initList()
    this.formQueryScheme = this.initForm();
  }
  

  initForm(): FormGroup {
   
    return this.fb.group({
    // Campo requerido
      comentario: [null, Validators.required]  // Campo requerido
       });
    
  }
  initList(){
    
    this.typesListMotive = [
      { text: 'Motivo uno', value: 1 },
      { text: 'Motivo dos', value: 2 },
      { text: 'Motivo tres', value: 3 },
      { text: 'Motivo cuatro', value: 4 }
    ];
  
  }
   
  onCloseModal(){}

}
