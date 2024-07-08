import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Process {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
}

interface CurrentProcess {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
  asunto: string;
  cuerpo: string;
  cc: string;
  desde: string;
}

@Component({
  selector: 'app-see-email-template',
  templateUrl: './see-email-template.component.html',
  styleUrl: './see-email-template.component.css',
})
export class SeeEmailTemplateComponent {
  selectedProcess: string | null = null;
  selectedDocument: string | null = null;
  currentProcessId: CurrentProcess = {
    id: 1,
    name: 'abc',
    documentType: 'abc',
    process: 'ABC',
    description: 'Abc............',
    asunto: 'Asunto',
    cuerpo: 'Cuerpo',
    cc: 'CC',
    desde: 'Desde',
  };
  loading = false;

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

  constructor(private _activeRoute: ActivatedRoute) {
    this.loading = true;
    _activeRoute.queryParams.subscribe((params) => {
      this.currentProcessId = this.fetchCurrentProcess(params?.['id']);
    });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  fetchCurrentProcess(id: number) {
    console.log('fetching process with id: ', id);
    return {
      id: 1,
      name: 'Plantilla xyz',
      documentType: 'Documento 1',
      process: 'Proceso 1',
      description: 'Esta plantilla de correo electrónico sirve para...',
      asunto: 'Asunto',
      cuerpo:
        'señor(a)\n<nombre destinatario>\nCordial saludo\n\nEste correo es para informarle que...',
      cc: 'nombreusuario@dominio.texto',
      desde: 'nombreusuario@dominio.texto',
    };
  }

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
