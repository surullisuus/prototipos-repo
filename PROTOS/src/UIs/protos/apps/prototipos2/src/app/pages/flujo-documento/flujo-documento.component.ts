import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';
import { DialogType } from '../../components/dialog/models/dialog-type';
import {
  ActionType,
  DialogAction,
} from '../../components/dialog/models/dialog-action';

@Component({
  selector: 'app-flujo-documento',
  templateUrl: './flujo-documento.component.html',
  styleUrl: './flujo-documento.component.css',
})
export class FlujoDocumentoComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

  type = '';
  documentName = '';
  process = '';
  phase: 'check' | 'signature' | 'approvement' = 'check';

  responsible = '';
  responsibleApprovement = '';

  constructor(
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getQueryParams();
  }

  getQueryParams(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      console.log(JSON.stringify(params));
      console.log(params['type']);
      this.documentName = params['documentName'] || null;
      this.process = params['process'] || null;
      this.type = params['type'] || null;
      this.phase = params['phase'];
    });
  }

  registerResponsible(name: string) {
    this.responsible = name;
  }

  registerResponsibleApprovement(name: string) {
    this.responsibleApprovement = name;
  }

  onSendDocumentToNextPhase($event: Event) {
    $event.preventDefault();

    const dialogData = new DialogData();
    dialogData.title = 'Enviar documento';
    dialogData.body = `El documento ${this.documentName} será enviado para ${
      this.phase === 'check'
        ? 'revisión'
        : this.phase === 'approvement'
        ? 'aprobación'
        : 'firma'
    }.`;
    dialogData.textButtonCancel = 'Cancelar';
    dialogData.textButtonConfirm = 'Enviar';
    dialogData.type = DialogType.warning;

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          const body = `Transacción exitosa.`;
          dialogAction.eventClose.emit();
          this.showSuccessTaskInitializationAlertState(body);
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }

  showSuccessTaskInitializationAlertState(body: string) {
    const dialogData = new DialogData();
    dialogData.title = body;
    dialogData.type = DialogType.success;
    dialogData.buttonConfirm = false;
    dialogData.textButtonCancel = 'Cerrar';

    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        dialogAction.eventClose.emit();
        location.replace('/consultar-documentos');
      });
  }
}
