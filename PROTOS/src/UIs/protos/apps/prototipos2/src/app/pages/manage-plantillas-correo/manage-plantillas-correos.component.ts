import { Component } from '@angular/core';

interface Process {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
}

@Component({
  selector: 'app-manage-plantillas-correos',
  templateUrl: './manage-plantillas-correos.component.html',
  styleUrl: './manage-plantillas-correos.component.css',
})
export class ManagePlantillasCorreosComponent {
  selectedProcess: string | null = null;
  selectedDocument: string | null = null;

  process: Process[] = [
    {
      id: 1,
      name: 'abc',
      documentType: 'abc',
      process: 'ABC',
      description: 'Abc............',
    },
    {
      id: 2,
      name: 'abc',
      documentType: 'abc',
      process: 'abc',
      description: 'abc............',
    },
    {
      id: 3,
      name: 'abc',
      documentType: 'abc',
      process: 'abc',
      description: 'abc............',
    },
  ];

  processOptions() {
    return [
      {
        id: 1,
        text: 'Proceso 1',
      },
      {
        id: 2,
        text: 'Proceso 2',
      },
      {
        id: 3,
        text: 'Proceso 3',
      },
    ];
  }

  setSelectedProcess(process: { id: number; text: string }) {
    this.selectedProcess = process.text;
  }

  documentOptions() {
    return [
      {
        id: 1,
        text: 'Documento 1',
      },
      {
        id: 2,
        text: 'Documento 2',
      },
      {
        id: 3,
        text: 'Documento 3',
      },
    ];
  }

  setSelectedDocument(document: { id: number; text: string }) {
    this.selectedDocument = document.text;
  }
}
