
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-vista-configurar-plantillas',
    templateUrl: './vistaConfigurarPlantillas.component.html',
    styleUrl: './vistaConfigurarPlantillas.component.css',
})
export class VistaConfigurarPlantillasComponent {
    selectedProceso: string = '';
    selectedTipoDocumental: string = '';
    procesos: string[] = ['Proceso 1', 'Proceso 2', 'Proceso 3'];
    tiposDocumentales: string[] = ['Tipo 1', 'Tipo 2', 'Tipo 3'];
    plantillas = [
      { proceso: 'ABC', tipoDocumental: 'abc', nombre: 'abc', descripcion: 'abc............' },
      { proceso: 'ABC', tipoDocumental: 'abc', nombre: 'abc', descripcion: 'abc............' },
      { proceso: 'ABC', tipoDocumental: 'abc', nombre: 'abc', descripcion: 'abc............' },
      { proceso: 'ABC', tipoDocumental: 'abc', nombre: 'abc', descripcion: 'abc............' }
    ];

    buscarPlantillas() {
      // Lógica para buscar plantillas
    }

    crearPlantilla() {
      // Lógica para crear nueva plantilla
    }

    verDetalle(plantilla: any) {
      // Lógica para ver detalle de una plantilla
    }

    editarPlantilla(plantilla: any) {
      // Lógica para editar una plantilla
    }

    eliminarPlantilla(plantilla: any) {
      // Lógica para eliminar una plantilla
    }
 }
