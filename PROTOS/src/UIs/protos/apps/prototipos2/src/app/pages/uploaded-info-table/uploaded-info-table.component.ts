import { Component } from '@angular/core';

interface InfoUploaded{
  titulo1: string;
  titulo2: string;
  titulo3: string;
  errores: string;
}
@Component({
  selector: 'app-uploaded-info-table',
  templateUrl: './uploaded-info-table.component.html',
  styleUrl: './uploaded-info-table.component.css',
})
export class UploadedInfoTableComponent {
  infoUploaded: InfoUploaded[] = [
    {
      titulo1: 'Abc...',
      titulo2: 'Abc...',
      titulo3: 'Abc...',
      errores: 'Abc...',
    },
    {
      titulo1: 'Abc...',
      titulo2: 'Abc...',
      titulo3: 'Abc...',
      errores: 'Abc...',
    },
    {
      titulo1: 'Abc...',
      titulo2: 'Abc...',
      titulo3: 'Abc...',
      errores: 'Abc...',
    }
  ]
}
