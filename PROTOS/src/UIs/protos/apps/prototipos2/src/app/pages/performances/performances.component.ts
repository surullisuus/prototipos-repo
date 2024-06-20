import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogData } from '../../components/dialog/models/dialog-data';
import { ActionType } from '../../components/dialog/models/action-type.enum';
import { DialogAction } from '../../components/dialog/models/dialog-action';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.component.html',
  styleUrls: ['./performances.component.css'],
})
export class PerformancesComponent {

  constructor(private dialogService: DialogService){}

  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;
  @ViewChild('openbutton') openbutton!: ElementRef;
  @ViewChild('openDocuments') openDocuments!: ElementRef;
  
  subscription!: Subscription;
  isVisible:boolean=false

  registros = [
    {
        nombreUsuarioGestor: "Juan",
        actuacion: "Actuación1",
        estado:"Finalizada",
        fechaCierre: "2024-06-09"
    },
    {
        nombreUsuarioGestor: "María",
        actuacion: "Actuación2",
        estado:"Cierre anormal",
        fechaCierre: "2024-06-08"
    },
    {
        nombreUsuarioGestor: "Pedro",
        actuacion: "Actuación3",
        estado:"Devuelta",
        fechaCierre: "2024-06-07"
    }
];


onDocumentsLink(){
 if(this.openDocuments){
  this.openDocuments.nativeElement.click()
 }
}



}
