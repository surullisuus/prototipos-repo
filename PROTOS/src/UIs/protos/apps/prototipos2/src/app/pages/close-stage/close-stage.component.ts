import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';


@Component({
  selector: 'app-close-stage',
  templateUrl: './close-stage.component.html',
  styleUrl: './close-stage.component.css',
})
export class CloseStageComponent {

  

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonclose') openbuttonclose!: ElementRef;

  constructor(private dialogService: DialogService) {  }


  subscription!: Subscription;


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
   
  onCloseModal(){}

}
