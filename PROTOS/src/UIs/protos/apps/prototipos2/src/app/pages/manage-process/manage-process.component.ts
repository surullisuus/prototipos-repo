import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { Modal } from '@protos/lib';


@Component({
  selector: 'app-manage-process',
 
  templateUrl: './manage-process.component.html',
  styleUrl: './manage-process.component.css',
})
export class ManageProcessComponent {

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbutton') openbutton!: ElementRef;
  @ViewChild('openbuttonseeRequirements') openbuttonseeRequirements!: ElementRef;
  @ViewChild('openbuttonperformance') openbuttonperformance!: ElementRef;
  modalConfig: Modal;

  constructor(private dialogService: DialogService) { 
    this.modalConfig = new Modal()
   }


  subscription!: Subscription;
  isVisible:boolean=false
  registros = [
    {
        nombreUsuarioGestor: "Juan",
        actuacion: "Actuación1",
        estado:"Finalizada",
        fechaCierre: "2024-06-09"
    },
    {
        nombreUsuarioGestor: "María",
        actuacion: "Actuación2",
        estado:"Cierre anormal",
        fechaCierre: "2024-06-08"
    },
    {
        nombreUsuarioGestor: "Pedro",
        actuacion: "Actuación3",
        estado:"Devuelta",
        fechaCierre: "2024-06-07"
    }
];

onPerformanceModal(){
  if(this.openbuttonperformance){
    this.openbuttonperformance.nativeElement.click()
  }
}

onSeeRequirementsModal(){

  if(this.openbuttonseeRequirements){
    this.openbuttonseeRequirements.nativeElement.click()
  }
}

  onCloseProcessModal( ) {
    
    const dialogData = new DialogData();
    dialogData.title="¿Está seguro de cerrar la etapa?"
    dialogData.body = "Existen actividades en curso"
    + " y la acción es irreversible";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.type = DialogType.warning;
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
        if(this.openbutton){
          dialogAction.eventClose.emit();
          this.openbutton.nativeElement.click()
        }
          
        this.isVisible=true
         
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
