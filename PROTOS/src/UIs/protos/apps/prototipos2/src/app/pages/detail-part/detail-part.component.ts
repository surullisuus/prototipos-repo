import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DialogService } from '../../components/dialog/services/dialog.service';


interface QuerySelect {
  text: string;
  value: number;
}

@Component({
  selector: 'app-detail-part',
  templateUrl: './detail-part.component.html',
  styleUrls: ['./detail-part.component.css'],
})


export class DetailPartComponent {


  constructor( private readonly fb: FormBuilder,
    private dialogService: DialogService,
    private router: Router){}
  
   
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbutton') openbutton!: ElementRef;
  formQueryScheme!: FormGroup;
  subscription!: Subscription;
   detail= {
    tipoParte: 'Cliente',
    noIdentificacion: 12345678,
    tipoIdentificacion:"Cédula de ciudadanía",
    nombreRazonSocial: 'Juan Pérez',
    departamento: 'CAUCA',
    municipio: 'POPAYÁN',
    direccion:"CL 12 # 8-26",
    razon:"Razón social cundinamarca",
    correo:"parteuno@yopmail.com",
    telefono:"3245990788"
  }

 

  ngOnInit(): void {
  

    this.formQueryScheme = this.fb.group({
      tipoIdentificacion: [2, Validators.required],
      numeroIdentificacion: ['12345678', Validators.required],
      tipoParte: [1, Validators.required],
      razonSocial: ['Mi Casa Ya', Validators.required],
      departamento: [2, Validators.required],
      municipio: [2, Validators.required],
      direccion: ['Cra 26 #12 -24', Validators.required],
      telefono: ['3127467890', Validators.required],
      correoElectronico: ['correo@yopmail.com', [Validators.required, Validators.email]],
      aceptaTratamiento: [false, Validators.requiredTrue],
      fileUpload: [{ value: "", disabled: true }]
    })
   const valuedept= this.formQueryScheme.get('departamento')?.value
    console.log("depart",valuedept)
    this.formQueryScheme.get('aceptaTratamiento')?.valueChanges.subscribe(value => {
      if (value) {
      
        this.formQueryScheme.get('fileUpload')?.enable();
      } else {
       
        this.formQueryScheme.get('fileUpload')?.disable();
      }
    });
  
  }
  onClose(){
    this.router.navigate(['/partes-procesos']);
  }

  onSeeDocument(){

    if(this.openbutton){
      this.openbutton.nativeElement.click()
    }
  }

  onCloseModal() {}

}
