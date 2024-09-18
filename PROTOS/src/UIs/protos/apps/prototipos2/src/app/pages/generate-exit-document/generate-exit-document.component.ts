import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-generate-exit-document',
  templateUrl: './generate-exit-document.component.html',
  styleUrl: './generate-exit-document.component.css',
})
export class GenerateExitDocumentComponent {
  @ViewChild('openbuttongenerateExitDocument')
  openbuttongenerateExitDocument!: ElementRef;
  @ViewChild('generateExitDocumentModal')
  generateExitDocumentModal!: ElementRef;
  @ViewChild('closeGenerateExitDocumentModal')
  closeGenerateExitDocumentModal!: ElementRef;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

  constructor(private dialogService: DialogService) {}

  onShowPreliminarView() {
    this.showAlert('El tipo documental es requerido', DialogType.warning,true);
    this.closeGenerateExitDocumentModal.nativeElement.click();



    // if (this.openbuttonpreliminarView) {
    //   this.openbuttonpreliminarView.nativeElement.click();
    // }
  }

  onCancel(): void {
    this.closeGenerateExitDocumentModal.nativeElement.click();
  }

  showAlert(body: string, dialogType: DialogType,open2ndModal:boolean) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = dialogType;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.buttonConfirm = false;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
        if(open2ndModal){
          this.openbuttongenerateExitDocument.nativeElement.click();
        }
      });
  }
}
