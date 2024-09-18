import { Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
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
interface processOption{
  processName: string;
}
interface stageOption{
  stageName: string;
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
  processTypes: processOption[] = [
    {
      processName: 'ABC',
    },
    {
      processName: 'ABC',
    },
    {
      processName: 'ABC',
    },
  ]
  stageTypes: stageOption[] = [
    {
      stageName: 'ABC',
    },
    {
      stageName: 'ABC',
    },
    {
      stageName: 'ABC',
    },
  ]
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
  processOptions() {
    return this.processTypes.map((processOption) => {
      return { id: processOption.processName, text: processOption.processName };
    });
  }
  stageOptions() {
    return this.stageTypes.map((stageOption) => {
      return { id: stageOption.stageName, text: stageOption.stageName };
    });
  }
  AcceptModal() {
    const dialogData = new DialogData();
    dialogData.title = "¿Está seguro de eliminar esta etapa?";
    dialogData.textButtonCancel = "Cerrar";
    dialogData.textButtonConfirm = "Aceptar";
    dialogData.type = DialogType.warning;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          dialogAction.eventClose.emit();
          this.onAcceptedModal(); 
          // Aquí puedes agregar el setTimeout si es necesario
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  onAcceptedModal(){
    const dialogData = new DialogData();
    dialogData.title = "Etapa eliminada de forma exitosa";
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';
    dialogData.type = DialogType.success;
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((DialogAction: DialogAction) => {
          DialogAction.eventClose.emit()
          location.reload();
      })
  }
  onCloseModal() {}
}
