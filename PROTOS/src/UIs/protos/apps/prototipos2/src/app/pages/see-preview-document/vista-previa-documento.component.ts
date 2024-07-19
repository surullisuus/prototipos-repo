import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-previa-documento',
  templateUrl: './vista-previa-documento.component.html',
  styleUrl: './vista-previa-documento.component.css',
})
export class VistaPreviaDocumentoComponent {
  edit = false;

  setEnableEdit() {
    this.edit = !this.edit;
  }

  get enableEdit() {
    return !this.edit;
  }
}
