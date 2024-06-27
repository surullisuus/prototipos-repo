import { Component, ElementRef, ViewChild, ViewContainerRef, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';

interface ProcessStage {
  nombreProceso: string;
  nombreEtapa: string;
}

@Component({
  selector: 'app-process-stages',
  templateUrl: './process-stages.component.html',
  styleUrls: ['./process-stages.component.css'],
})
export class ProcessStagesComponent {
@ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
processStages: ProcessStage[] = [
    {
      nombreProceso: "Proceso 1",
      nombreEtapa: "Etapa 1"
    },
    {
      nombreProceso: "Proceso 2",
      nombreEtapa: "Etapa 2"
    }
  ];
  fromQueryScheme!: FormGroup;
  isDisabledSubmit = false;
  subscription!: Subscription;

  constructor(private readonly fb: FormBuilder,private dialogService: DialogService) {}
  ngOnInit(): void {
    this.fromQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }
  AcceptModal() {
    const dialogData = new DialogData();
    dialogData.title = "¿Está seguro de eliminar esta etapa?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onCloseModal() {}
}
