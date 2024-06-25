import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';

@Component({
  selector: 'app-parts-process',
  templateUrl: './parts-process.component.html',
  styleUrls: ['./parts-process.component.css'],
})
export class PartsProcessComponent {

  constructor( private readonly fb: FormBuilder,
    private router: Router,private dialogService: DialogService
  ){}
  

   partes = [
    {
      tipoParte: 'Cliente',
      noIdentificacion: 12345678,
      nombreRazonSocial: 'Razón social oferente',
      departamento: 'Cundinamarca',
      municipio: 'Bogotá',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 87654321,
      nombreRazonSocial: 'Razón social patrimonio',
      departamento: 'Antioquia',
      municipio: 'Medellín',
    },
    {
      tipoParte: 'Cliente',
      noIdentificacion: 11223344,
      nombreRazonSocial: 'Razón social junio',
      departamento: 'Valle del Cauca',
      municipio: 'Cali',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 44332211,
      nombreRazonSocial: 'Razón social mi casa ya',
      departamento: 'Santander',
      municipio: 'Bucaramanga',
    },
    {
      tipoParte: 'Cliente',
      noIdentificacion: 55667788,
      nombreRazonSocial: 'Razón social uno',
      departamento: 'Bolívar',
      municipio: 'Cartagena',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 88776655,
      nombreRazonSocial: 'Razón social solidaridad',
      departamento: 'Atlántico',
      municipio: 'Barranquilla',
    },
  ];

 
  formQueryScheme!: FormGroup;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
   subscription!: Subscription;


  
  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  }
  
  initForm(): FormGroup {
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }
  
  onCreatePart(){
    this.router.navigate(['/crear-parte']);
  }

  onDeletePart(){

    const dialogData = new DialogData();
    dialogData.title = '¿Está seguro de eliminar el registro?' 
    dialogData.textButtonCancel = "Cancelar";
    dialogData.type = DialogType.warning;
  
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.onSuccessDeletePart()
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onSuccessDeletePart(){
    const dialogData = new DialogData();
    dialogData.title="Registro eliminado de forma exitosa"
    dialogData.type = DialogType.success;
       dialogData.buttonCancel=false
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          location.reload();
         
        } 
      });
  }

}
