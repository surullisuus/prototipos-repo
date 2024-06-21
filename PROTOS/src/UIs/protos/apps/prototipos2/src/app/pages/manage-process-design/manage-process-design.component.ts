import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'manage-process-design',
  templateUrl: './manage-process-design.component.html',
  styleUrls: ['./manage-process-design.component.css'],
})
export class ManageProcessDesignComponent {
  @ViewChild('openbuttongenerateExitDocument')
  openbuttongenerateExitDocument!: ElementRef;
  @ViewChild('openbuttonassociateEntryDoc')
  openbuttonassociateEntryDoc!: ElementRef;

  radicados = [
    {
      numeroRadicado: 123,
      fechaRadicacion: '01/01/2022',
      seleccionar: true,
    },
    {
      numeroRadicado: 456,
      fechaRadicacion: '02/01/2022',
      seleccionar: true,
    },
  ];

  partes = [
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Entrada',
      estadoDocumento: 'Radicado',
      numeroRadicado: 12345678,
      fechaRadicacion: '2022-01-01',
      numerado: '2022-01-01',
      fechado: '2022-01-01',
      seleccionar: true,
    },
    {
      nombreArchivo: 'DEF',
      tipoDocumento: 'Entrada',
      estadoDocumento: 'Radicado',
      numeroRadicado: 12345678,
      fechaRadicacion: '2022-01-01',
      numerado: '2022-01-01',
      fechado: '2022-01-01',
      seleccionar: true,
    },
    {
      nombreArchivo: 'GHI',
      tipoDocumento: 'Entrada',
      estadoDocumento: 'Radicado',
      numeroRadicado: 12345678,
      fechaRadicacion: '2022-01-01',
      numerado: '2022-01-01',
      fechado: '2022-01-01',
      seleccionar: true,
    },
  ];

  formQueryScheme!: FormGroup;
  public preliminarTab1Visible: boolean = false;

  isDisabledSubmit = false;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      keyword: [null],
      status: [null],
      date: [null],
    });
  }

  onGenerateExitDocument() {
    if (this.openbuttongenerateExitDocument) {
      this.openbuttongenerateExitDocument.nativeElement.click();
    }
  }
  onAssociateEntryDoc() {
    if (this.openbuttonassociateEntryDoc) {
      this.openbuttonassociateEntryDoc.nativeElement.click();
    }
  }
}
