import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Router, RouterLink } from '@angular/router';


interface QuerySelect {
  text: string;
  value: number;
}


@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls:['./create-part.component.css'],
})

export class CreatePartComponent {

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  formQueryScheme!: FormGroup;
  subscription!: Subscription;
  typesList: QuerySelect[] = [];
  typesListParts: QuerySelect[] = [];
  typesListDepartment: QuerySelect[] = [];
  typesListMunicipal: QuerySelect[] = [];
  


  constructor( private readonly fb: FormBuilder,
    private dialogService: DialogService,
    private router: Router
  ){}
  
  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  this.formQueryScheme.get('aceptaTratamiento')?.valueChanges.subscribe((value) => {
    if (value) {
      this.enableFileUpload();
    } else {
      this.disableFileUpload();
    }
  });
}

initList(){
  this.typesList = [
    { text: 'Cédula de ciudadanía', value: 1 },
    { text: 'Cédula de extranjería', value: 2 },
    { text: 'Pasaporte', value: 3 },
    { text: 'NIT', value: 4 }
  ];

  this.typesListParts = [
    { text: 'Parte uno', value: 1 },
    { text: 'Parte dos', value: 2 },
    { text: 'Parte tres', value: 3 },
    { text: 'Parte cuatro', value: 4 }
  ];

  this.typesListDepartment = [
    { text: 'CAUCA', value: 1 },
    { text: 'CAQUETÁ', value: 2 },
    { text: 'CUNDINAMARCA', value: 3 },
    { text: 'RISARALDA', value: 4 },
   
  ];

  this.typesListMunicipal = [
    { text: 'POPAYÁN', value: 1 },
    { text: 'FLORENCIA', value: 2 },
    { text: 'BOGOTÁ', value: 3 },
    { text: 'PEREIRA', value: 4},
    ];
}

onSearch() {
  

  const formData = {
    tipoId: [1],
    id: ["12345"],
    razon: "Razón social de ejemplo",
    direccion: "Calle 13 45-68",
    telefono: "602434780",
    municipio:1,
    departamento:1,
    tipoParte:2,
    correo: "correo@ejemplo.com",
    aceptaTratamiento: true,
    fileUpload: { value: '', disabled: false }
  };

  this.formQueryScheme.setValue(formData);
}


enableFileUpload() {
  this.formQueryScheme.get('fileUpload')?.enable();
}

disableFileUpload() {
  this.formQueryScheme.get('fileUpload')?.disable();
}


  initForm(): FormGroup {
    this.initList()
    return this.fb.group({
      razon: ["", [Validators.required]],
      tipoId: ["1", Validators.required],
      id: [null, [Validators.required]],
      tipoParte: ["5", Validators.required],
      direccion: ["", Validators.required],
      telefono: ["", [Validators.required]],  // Para un teléfono de 7 a 10 dígitos
      correo: ["", [Validators.required, Validators.email]],
      departamento: ["5", Validators.required],
      municipio: ["5", Validators.required],
      aceptaTratamiento: [false],  
      fileUpload: [{ value: "", disabled: true }]
       });
    
  }

  onSaveModal(){

    console.log(this.formQueryScheme.value)
    console.log(this.formQueryScheme.invalid)
if(this.formQueryScheme.invalid){
  this.onShowError()
  this.formQueryScheme.markAllAsTouched()
  return
}
 
    const dialogData = new DialogData();
    dialogData.title="¿Está seguro de guardar esta información?"
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
    dialogData.title="El registro fue guardado con éxito"
    dialogData.type = DialogType.success;
       dialogData.buttonCancel=false
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.router.navigate(['/partes-procesos']);
         
        } 
      });
  }
  

  onShowError(){
     
    const dialogData = new DialogData();
    dialogData.title="Campos Requeridos"
    dialogData.body="Señor usuario, hacen falta campos por diligenciar."
    dialogData.type = DialogType.danger;
    dialogData.buttonCancel=false
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
         
        } else{
          dialogAction.eventClose.emit();
        }
      });
  }
  
  onCancel(){
    this.router.navigate(['/partes-procesos']);
  }

  
}
