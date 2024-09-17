import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { ActionType, DialogAction } from '../../components/dialog/models/dialog-action';
import { Router } from '@angular/router';

@Component({
    selector: 'app-publish-document',
    templateUrl: './publish-document.component.html',
    styleUrl: './publish-document.component.css',
})
export class PublishDocumentComponent implements OnInit {
    subscription!: Subscription;
    formQueryScheme!: FormGroup;
    constructor(private readonly fb: FormBuilder, private dialogService: DialogService, private router: Router) {}
    @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

    publicaciones = [
        {
            id: 123,
            publicacion: 'www.ejemplo.com',
            proceso: 'Convocatoria',
            tipoDocumental: 'Mi Casa Ya',
            elaboro: 'Ej. Maria Gomez',
            firmo: 'Ej. Maria Gomez',
            fechaFirma: '06/06/2024',
        },
    ];

    historicoDocumentos = [
        {
            id: "1",
            fase: 'Revisión 1',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "2",
            fase: 'Revisión 2',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "3",
            fase: 'Revisión 3',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "4",
            fase: 'Revisión 4',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "5",
            fase: 'Revisión 5',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "6",
            fase: 'Aprobación',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "7",
            fase: 'Numeración y fecha',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
        {
            id: "8",
            fase: 'Firma',
            responsable: 'Ej. Luis Mora',
            estado: true
        },
    ];

    initForm(): FormGroup {
        return this.fb.group({
          idPublicacion: [null],
          enlaceUnoPublicacion: [null],
          enlaceDosPublicacion: [null],
        });

      }

      ngOnInit(): void {
        this.formQueryScheme = this.initForm();
      }


      onClose() {
      this.router.navigate(['consultar-documentos']);


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

      onSavePublication(): void {
        const dialogData = new DialogData();
        dialogData.title = "Guardar publicación";
        dialogData.body = "¿Esta seguro de guardar la publicación?";
        dialogData.textButtonCancel = "Cerrar";
        dialogData.textButtonConfirm = "Aceptar";
        dialogData.type = DialogType.warning;
        this.subscription = this.dialogService
          .openModal(this.dialog, dialogData)
          .subscribe((dialogAction: DialogAction) => {
              if (dialogAction.action === ActionType.confirm) {
                dialogAction.eventClose.emit();
                this.showAlertState('Publicación guardada exitosamente', DialogType.success);
            } else {
              dialogAction.eventClose.emit();
            }
          });
      }
}
