import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-requirement',
  templateUrl: './create-requirement.component.html',
  styleUrls: ['./create-requirement.component.css'],
})
export class CreateRequirementComponent {
   

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbuttonclose') openbuttonclose!: ElementRef;


  constructor(private dialogService: DialogService) {  }


  subscription!: Subscription;

  
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
