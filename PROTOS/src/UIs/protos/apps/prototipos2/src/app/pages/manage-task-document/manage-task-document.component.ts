import { Component } from '@angular/core';

@Component({
    selector: 'app-manage-task-document',
    templateUrl: './manage-task-document.component.html',
    styleUrl: './manage-task-document.component.css',
})
export class ManageTaskDocumentComponent {
    documents=[
        {
            id: 1,
            nombreDocumento: 'Documento A',
            tipoDocumento: 'Entrada',
            origenDocumento: 'GesDoc',
        },
        {
            id: 2,
            nombreDocumento: 'Documento B',
            tipoDocumento: 'Salida',
            origenDocumento: 'Carga',
        },
        {
            id: 3,
            nombreDocumento: 'Documento C',
            tipoDocumento: 'Salida',
            origenDocumento: 'SISV',
        },
        {
            id: 4,
            nombreDocumento: 'Documento D',
            tipoDocumento: 'Salida',
            origenDocumento: 'SISV',
        },
        {
            id: 5,
            nombreDocumento: 'Documento E',
            tipoDocumento: 'Entrada',
            origenDocumento: 'GesDoc',
        },
        {
            id: 6,
            nombreDocumento: 'Documento F',
            tipoDocumento: 'Salida',
            origenDocumento: 'Carga',
        },
    ]

    hasObservaciones(item: any): boolean {
        return item.tipoDocumento === 'Salida';
    }

    hasVerDocumento(item: any): boolean {
        return item.tipoDocumento === 'Entrada' || item.tipoDocumento === 'Salida';
    }
}
