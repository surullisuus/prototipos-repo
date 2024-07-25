import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Process {
  id: number;
  name: string;
  documentType: string;
  process: string;
  description: string;
}

@Component({
  selector: 'app-create-email-template',
  templateUrl: './create-email-template.component.html',
  styleUrl: './create-email-template.component.css',
})
export class CreateEmailTemplateComponent implements OnInit {
  selectedProcess: string | null = null;
  selectedDocument: string | null = null;
  formQueryScheme!: FormGroup;

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

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this._formBuilder.group({
      idPlantilla: [null],
    });
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
        text: 'Tema 1',
      },
      {
        id: 2,
        text: 'Tema 2',
      },
      {
        id: 3,
        text: 'Tema 3',
      },
    ];
  }

  setSelectedDocument(document: { id: number; text: string }) {
    this.selectedDocument = document.text;
  }
}
