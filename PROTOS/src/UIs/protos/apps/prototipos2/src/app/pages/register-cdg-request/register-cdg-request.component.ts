import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import {
  ActionType,
  DialogAction,
} from '../../components/dialog/models/dialog-action';

@Component({
  selector: 'app-register-cdg-request',
  templateUrl: './register-cdg-request.component.html',
  styleUrl: './register-cdg-request.component.css',
})
export class RegisterCdgRequestComponent implements OnInit {
  @ViewChild('fechaInput') fechaInput!: ElementRef;
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  formQueryScheme!: FormGroup;
  selectedCondicion!: string;
  subscription!: Subscription;
  constructor(
    private readonly fb: FormBuilder,
    private dialogService: DialogService
  ) {}

  processOptions() {
    return [
      {
        id: 1,
        text: 'Propietario',
      },
      {
        id: 2,
        text: 'Autorizado',
      },
      {
        id: 3,
        text: 'Apoderado',
      },
      {
        id: 4,
        text: 'Interesado',
      }
    ];
  }

  setCondicion(condicion: { id: number; text: string }) {
    this.selectedCondicion = condicion.text;
  }


  initForm(): FormGroup {
    return this.fb.group({
      noRadicado: [null],
      fecha: [null],
      noMatricula: [null],
      noExpediente: [null],
      profesionalAsignado: [null],
      peticionario: this.fb.group({
        nombre: [null],
        tipoDocumento: [null],
        noIdentificacion: [null],
        enCondicionDe: [null],
      }),
    });
  }
  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }
  onSave(): void {
    const dateValue = this.fechaInput.nativeElement.value;
    this.formQueryScheme.get('fecha')?.setValue(dateValue);
    this.formQueryScheme.get('peticionario.enCondicionDe')?.setValue(this.selectedCondicion);
    console.log(this.formQueryScheme.value);
    this.showDialogDocument('¿Está seguro de guardar esta información?');
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
  registerCondicion(enCondicionDe: any): void {
    this.formQueryScheme.controls['peticionario.enCondicionDe'].patchValue(enCondicionDe.name);
  }

  onLoadDocument() {
    return true
  }

  showDialogDocument(title: string) {
    const dialogData = new DialogData();
    dialogData.title = title;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.showAlertState(
            'Transacción exitosa - Señor usuario, la información ha sido guardada exitosamente.',
            DialogType.success
          );
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }
}
