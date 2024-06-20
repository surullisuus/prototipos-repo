import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-part',
  templateUrl: './create-part.component.html',
  styleUrls:['./create-part.component.css'],
})
export class CreatePartComponent {

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  formQueryScheme!: FormGroup;
  subscription!: Subscription;
  isVisible:boolean=false


  constructor( private readonly fb: FormBuilder,
    private dialogService: DialogService,
    private router: Router
  ){}
  
  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [""],
      status: [null],
      date: [null],
    });
  }

  onSaveModal(){
     
    const dialogData = new DialogData();
    dialogData.title="¿Está seguro de guardar esta información?"
    dialogData.textButtonCancel = "Cerrar";
    dialogData.type = DialogType.warning;
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
       
          this.onShowSuccessModal()
         
        } else {
          dialogAction.eventClose.emit();
        }
      });
  }
  
  onShowSuccessModal(){
     
    const dialogData = new DialogData();
    dialogData.title="El registro fue guardado con éxito"
    dialogData.type = DialogType.success;
       dialogData.buttonCancel=false
  
    this.dialogService.resultActionModal
    this.subscription = this.dialogService
      .openModal(this.dialog, dialogData)
      .subscribe((dialogAction: DialogAction) => {
        if (dialogAction.action === ActionType.confirm) {
          this.router.navigate(['/partes-procesos']);
         
        } 
      });
  }
  
  onCancel(){
    this.router.navigate(['/partes-procesos']);
  }

  
}
