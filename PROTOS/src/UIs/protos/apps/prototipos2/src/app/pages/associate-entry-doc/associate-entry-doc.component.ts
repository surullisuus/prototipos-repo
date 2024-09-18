import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogAction } from '../../components/dialog/models/dialog-action';
@Component({
  selector: 'app-associate-entry-doc',
  templateUrl: './associate-entry-doc.component.html',
  styleUrl: './associate-entry-doc.component.css',
})
export class AssociateEntryDocComponent {
  @ViewChild('openbuttonassociateEntryDoc')
  openbuttonassociateEntryDoc!: ElementRef;
  @ViewChild('closeModal') closeModal!: ElementRef;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;


  public data = [
    {
      id: 1,
      numeroRadicado: '234',
      fechaRadicacion: '01/12/2022',
      seleccionado: false,
    },
    {
      id: 2,
      numeroRadicado: '235',
      fechaRadicacion: '01/12/2022',
      seleccionado: false,
    },
  ];
  subscription!: Subscription;
  formQueryScheme!: FormGroup;

  constructor(private readonly fb: FormBuilder,private dialogService: DialogService) {}

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

  onBuscar(): void {
    this.showAlert('No se encontraron resultados con los criterios de búsqueda.', DialogType.warning,true);
  }

  onAssociate(): void {
    this.showAlert('Documento asociado con éxito', DialogType.success,false);


  }

  onCancel(): void {
    this.closeModal.nativeElement.click();
  }

  showAlert(body: string, dialogType: DialogType,open2ndModal:boolean) {
    this.closeModal.nativeElement.click();
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = dialogType;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
          dialogAction.eventClose.emit();
          if(open2ndModal){
            this.openbuttonassociateEntryDoc.nativeElement.click();

          }

      });
  }
}
