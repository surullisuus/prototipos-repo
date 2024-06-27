import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-generate-exit-document',
  templateUrl: './generate-exit-document.component.html',
  styleUrl: './generate-exit-document.component.css',
})
export class GenerateExitDocumentComponent {
  @ViewChild('openbuttonpreliminarView')
  openbuttonpreliminarView!: ElementRef;

  constructor() {}
  onShowPreliminarView() {
    if (this.openbuttonpreliminarView) {
      this.openbuttonpreliminarView.nativeElement.click();
    }
  }
}
