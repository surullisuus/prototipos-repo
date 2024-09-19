import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Router } from '@angular/router';

interface QuerySelect {
  text: string;
  value: number;
}


@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css'],
})
export class EditPartComponent {

  
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  formQueryScheme!: FormGroup;
  subscription!: Subscription;
  typesList: QuerySelect[] = [];
  typesListParts: QuerySelect[] = [];
  typesListDepartment: QuerySelect[] = [];
  typesListMunicipal: QuerySelect[] = [];

  isVisible:boolean=false

  
  constructor( private readonly fb: FormBuilder,
    private dialogService: DialogService,
    private router: Router){}
  

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
      { text: 'RISARALDA', value: 4 }
    ];

    this.typesListMunicipal = [
      { text: 'POPAYÁN', value: 1 },
      { text: 'FLORENCIA', value: 2 },
      { text: 'BOGOTÁ', value: 3 },
      { text: 'PEREIRA', value: 4 }
    ];
    
  }
 
  ngOnInit(): void {
    this.initList()    
    this.formQueryScheme = this.initForm();
    const valuedept= this.formQueryScheme.get('departamento')?.value
    console.log("depart",valuedept)
    this.formQueryScheme.get('aceptaTratamiento')?.valueChanges.subscribe(value => {
      if (value) {
        this.isVisible=true
        this.formQueryScheme.get('fileUpload')?.enable();
      } else {
        this.isVisible=false
        this.formQueryScheme.get('fileUpload')?.disable();
      }
    });

    if (!sessionStorage.getItem('reloaded')) {
      // Recargar la página al iniciar el componente
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    } else {
      // Si ya se recargó, eliminar el indicador para futuras visitas
      sessionStorage.removeItem('reloaded');
    }  
  
    
  
  }

  initForm():FormGroup
  {
   return this.fb.group({
      tipoIdentificacion: [{ value: 2, disabled: true }, Validators.required],
      numeroIdentificacion: ['12345678', Validators.required],
      tipoParte: ["1", Validators.required],
      razonSocial: ['Mi Casa Ya', Validators.required],
      departamento: ["2", Validators.required],
      municipio: ["2", Validators.required],
      direccion: ['Cra 26 #12 -24', Validators.required],
      telefono: ['3127467890', Validators.required],
      correoElectronico: ['correo@yopmail.com', [Validators.required, Validators.email]],
      aceptaTratamiento: [false, Validators.requiredTrue],
      fileUpload: [{ value: "", disabled: true }]
    })
  
  }


    onSaveModal(){
     
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
    onShowSuccessModal(){
       
      const dialogData = new DialogData();
      dialogData.title="El registro fue actualizado con éxito"
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
    
    onCancel(){
      this.router.navigate(['/partes-procesos']);
    }
  

}
