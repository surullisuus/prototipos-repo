import { Component } from '@angular/core';

interface DocumentRequest{
  documentoRequerido: string;
  fechaCarga: Date;
  estado: string;
  usuario: string;
}

@Component({
  selector: 'app-perform-documents-upload',
  templateUrl: './perform-documents-upload.component.html',
  styleUrl: './perform-documents-upload.component.css',
})
export class PerformDocumentsUploadComponent {
  documentsRequest: DocumentRequest[]=[
    {
      documentoRequerido: 'Abc...',
      fechaCarga: new Date('2024-07-1'),
      estado: 'Cargado',
      usuario: 'Usuario1'
    },
    {
      documentoRequerido: 'Abc...',
      fechaCarga: new Date('2024-06-1'),
      estado: 'Cargado',
      usuario: 'Usuario2'
    },
    {
      documentoRequerido: 'Abc...',
      fechaCarga: new Date('2024-08-1'),
      estado: 'Cargado',
      usuario: 'Usuario3'
    }
  ]
}
