import { Component } from '@angular/core';

interface DocumentType {
  id: number;
  process: string;
  documents: string[];
}

@Component({
  selector: 'app-see-documental-types',
  templateUrl: './see-documental-types.component.html',
  styleUrl: './see-documental-types.component.css',
})
export class SeeDocumentalTypesComponent {
  tiposDocumentales: DocumentType[] = [
    {
      id: 1,
      process: 'Proceso de selección',
      documents: ['Acta de selección', 'Acta de apertura', 'Acta de cierre'],
    },
    {
      id: 2,
      process: 'Proceso de contratación',
      documents: ['Acta de contratación', 'Acta de apertura', 'Acta de cierre'],
    },
    {
      id: 3,
      process: 'Proceso de ejecución',
      documents: ['Acta de ejecución', 'Acta de apertura', 'Acta de cierre'],
    },
    {
      id: 4,
      process: 'Proceso de liquidación',
      documents: ['Acta de liquidación', 'Acta de apertura', 'Acta de cierre'],
    },
  ];
}
