import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-approve-document-modal',
  templateUrl: './approve-document-modal.component.html',
  styleUrl: './approve-document-modal.component.css',
})

export class ApproveDocumentModalComponent implements OnInit {
  @Input() documentId: string | undefined;

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('closeApproveDocumentModal')
  closeApproveDocumentModal!: ElementRef;
  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) { }
  @ViewChild('openbuttonApproveDocument')
  openbuttonApproveDocument!: ElementRef;
  subscription!: Subscription;
  formQueryScheme!: FormGroup;
  initForm(): FormGroup {
    return this.fb.group({
      elaboro: [null],
      responsable: [null],
      responsableAprobacion: [null],
    });
  }

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  onSeePreview(){
    
  }
  onSend(): void {
    console.log(this.formQueryScheme.value);
    this.closeApproveDocumentModal.nativeElement.click();
    this.showAlertState('Documento enviado a aprobación exitosamente', DialogType.success);
  }

  showAlertState(body: string, dialogType: DialogType) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = dialogType;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        location.reload();
        dialogAction.eventClose.emit();
      });
  }
}
