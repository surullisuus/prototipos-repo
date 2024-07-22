import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';

@Component({
  selector: 'app-delete-document',
  templateUrl: './delete-document.component.html',
  styleUrl: './delete-document.component.css',
})
export class DeleteDocumentComponent implements OnInit {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  subscription!: Subscription;

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
        location.reload();
        location.replace('/consultar-documentos');
      });
  }
  @Input() documentId: string | undefined;
  formQueryScheme!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this._formBuilder.group({
      observation: [null],
    });
  }
}
