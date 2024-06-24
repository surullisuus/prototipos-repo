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
      numeroRadicado: 456,
      fechaRadicacion: '01/01/2022',
      numerado: '-',
      fechado: '-',
      seleccionar: true,
      actions: [
        {
          name: 'Borrar',
          action: () => console.log('Borrar'),
          enabled: true,
        },
        {
          name: 'Ver documento',
          action: () => console.log('Ver documento'),
          enabled: true,
        },
        {
          name: 'Observaciones',
          action: () => console.log('Observaciones'),
          enabled: false,
        },
      ],
    },
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Salida',
      estadoDocumento: 'Proyectado',
      numeroRadicado: '-',
      fechaRadicacion: '-',
      numerado: '-',
      fechado: '-',
      seleccionar: true,
      actions: [
        {
          name: 'Borrar',
          action: () => console.log('Borrar'),
          enabled: true,
        },
        {
          name: 'Ver documento',
          action: () => console.log('Ver documento'),
          enabled: true,
        },
        {
          name: 'Observaciones',
          action: () => console.log('Observaciones'),
          enabled: true,
        },
      ],
    },
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Salida',
      estadoDocumento: 'Por revisar',
      numeroRadicado: '-',
      fechaRadicacion: '-',
      numerado: '-',
      fechado: '-',
      seleccionar: true,
      actions: [
        {
          name: 'Borrar',
          action: () => console.log('Borrar'),
          enabled: true,
        },
        {
          name: 'Ver documento',
          action: () => console.log('Ver documento'),
          enabled: true,
        },
        {
          name: 'Observaciones',
          action: () => console.log('Observaciones'),
          enabled: false,
        },
      ],
    },
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Salida',
      estadoDocumento: 'Firmado',
      numeroRadicado: '-',
      fechaRadicacion: '-',
      numerado: '-',
      fechado: '-',
      seleccionar: true,
      actions: [
        {
          name: 'Borrar',
          action: () => console.log('Borrar'),
          enabled: true,
        },
        {
          name: 'Ver documento',
          action: () => console.log('Ver documento'),
          enabled: true,
        },
        {
          name: 'Observaciones',
          action: () => console.log('Observaciones'),
          enabled: false,
        },
      ],
    },
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Salida',
      estadoDocumento: 'Radicado',
      numeroRadicado: 123,
      fechaRadicacion: '05/01/2022',
      numerado: '-',
      fechado: '-',
      seleccionar: true,
      actions: [
        {
          name: 'Borrar',
          action: () => console.log('Borrar'),
          enabled: true,
        },
        {
          name: 'Ver documento',
          action: () => console.log('Ver documento'),
          enabled: true,
        },
        {
          name: 'Observaciones',
          action: () => console.log('Observaciones'),
          enabled: false,
        },
      ],
    },
    {
      nombreArchivo: 'ABC',
      tipoDocumento: 'Salida',
      estadoDocumento: 'Publicado',
      numeroRadicado: '-',
      fechaRadicacion: '-',
      numerado: '2020-GTC-0512-001',
      fechado: '07/01/2022',
      seleccionar: true,
      actions: [
        {
          name: 'Borrar',
          action: () => console.log('Borrar'),
          enabled: true,
        },
        {
          name: 'Ver documento',
          action: () => console.log('Ver documento'),
          enabled: true,
        },
        {
          name: 'Observaciones',
          action: () => console.log('Observaciones'),
          enabled: false,
        },
      ],
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
