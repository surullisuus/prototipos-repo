import { Component, ElementRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-document-signing',
  templateUrl: './document-signing.component.html',
  styleUrl: './document-signing.component.css',
})
export class DocumentSigningComponent { @Input() documentId: string | undefined;

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('closeApproveDocumentModal')
  closeApproveDocumentModal!: ElementRef;
  @ViewChild('seePreviewModal')
  seePreviewModal!: ElementRef;
  constructor(private readonly fb: FormBuilder, private dialogService: DialogService) {}
  @ViewChild('openbuttonApproveDocument')
  openbuttonApproveDocument!: ElementRef;
  subscription!: Subscription;
  formQueryScheme!: FormGroup;

  initForm(): FormGroup {
    return this.fb.group({
      elaboro: [null],
      responsable: [null],
      responsableAprobacion: [null],
      responsableFirma: [null],
      responsableNumeracion: [null],
    });
  }

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  onEnviarNumeracionFecha(){
    this.openbuttonApproveDocument.nativeElement.click();
    
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
