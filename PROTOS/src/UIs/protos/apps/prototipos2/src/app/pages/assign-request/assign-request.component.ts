import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-assign-request',
  templateUrl: './assign-request.component.html',
  styleUrl: './assign-request.component.css',
})

export class AssignRequestComponent 
{

  
@ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
@ViewChild('closeModal') closeModal!: ElementRef;
@ViewChild('openbutton') openbutton!: ElementRef;

 usuarios = [
    {
      cantidadDeSolicitudes: 5,
      nombresYApellidos: "Juan Pérez",
      rol: "Administrador",
      NoSoli:234
    },
    {
      cantidadDeSolicitudes: 10,
      nombresYApellidos: "María López",
      rol: "Usuario",
      NoSoli:234
    },
    {
      cantidadDeSolicitudes: 3,
      nombresYApellidos: "Carlos García",
      rol: "Supervisor",
      NoSoli:234
    }
  ];

  data={
    grupo:"Subdirección 1",
    proceso: "proceso 1",
    noSolicitud:234
  }
  constructor(private dialogService: DialogService){}

  
  isDisabledSubmit = false;
  subscription!: Subscription;


  
  onAssingRequestModal(usuario: any, event: Event) {
    event.preventDefault();
    
    const dialogData = new DialogData();
    dialogData.title="Asignar Solicitud"
    dialogData.body = '¿Está seguro de asignar al usuario '+ usuario.nombresYApellidos+
     " el No Solicitud " + usuario.NoSoli+ " ?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.type = DialogType.warning;
  
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body="Se asingó el No de solicitud "+ usuario.NoSoli+ " al usuario "+ usuario.nombresYApellidos
        + " de forma exitosa."
        dialogAction.eventClose.emit();
          this.showSuccessAlertState(body)
         
         
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }


  
showSuccessAlertState(body: string) {
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
