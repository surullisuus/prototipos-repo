import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-generar-documento',
  templateUrl: './generar-documento.component.html',
  styleUrl: './generar-documento.component.css',
})
export class GenerarDocumentoComponent implements OnInit {
  formQueryScheme!: FormGroup;

  isProyected = false;

  listaProcesos = [
    {
      id: 1,
      text: 'proceso A',
    },
    {
      id: 2,
      text: 'proceso B',
    },
    {
      id: 3,
      text: 'proceso C',
    },
  ];

  listaProgramas = [
    {
      id: 1,
      text: 'programa A',
    },
    {
      id: 2,
      text: 'programa B',
    },
    {
      id: 3,
      text: 'programa C',
    },
  ];

  listaTipoDocumental = [
    {
      id: 1,
      text: 'tipo documental A',
    },
    {
      id: 2,
      text: 'tipo documental B',
    },
    {
      id: 3,
      text: 'tipo documental C',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this._formBuilder.group({
      proceso: [null],
      tipoDocumental: [null],
      nombreDocumento: [null],
      programa: [null],
      creacion: [null],
    });
  }

  registerProcess(proceso: any): void {
    console.log('Proceso registrado', proceso);
    this.formQueryScheme.controls['proceso'].patchValue(proceso.text);
  }

  registerPrograma(programa: any): void {
    this.formQueryScheme.controls['programa'].patchValue(programa.text);
  }

  registerTipoDocumental(tipoDocumental: any): void {
    this.formQueryScheme.controls['tipoDocumental'].patchValue(
      tipoDocumental.text
    );
  }

  get disbleProyection(): boolean {
    if (this.formQueryScheme.controls['proceso'].value === null) {
      return true;
    }
    if (this.formQueryScheme.controls['tipoDocumental'].value === null) {
      return true;
    }
    if (this.formQueryScheme.controls['nombreDocumento'].value === null) {
      return true;
    }
    // if (!this.formQueryScheme.controls['creacion'].value) {
    //   return false;
    // }
    return false;
  }

  proyectDocument(): void {
    console.log('Proyectando documento');
    this.isProyected = true;
  }

  get disableProyect(): boolean {
    return !this.isProyected;
  }
}
