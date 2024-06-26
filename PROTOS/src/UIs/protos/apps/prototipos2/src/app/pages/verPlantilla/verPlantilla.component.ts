import { Component } from '@angular/core';

@Component({
    selector: 'app-ver-plantilla',
    templateUrl: './verPlantilla.component.html',
    styleUrl: './verPlantilla.component.css',
})
export class VerPlantillaComponent {
    selectedProceso: string = '';
    selectedTipoDocumental: string = '';
    nombre: string = '';
    descripcion: string = '';
    desde: string = '';
    cc: string = '';
    asunto: string = '';
    cuerpoCorreo: string = '';

    procesos: string[] = ['Proceso 1', 'Proceso 2', 'Proceso 3'];
    tiposDocumentales: string[] = ['Tipo 1', 'Tipo 2', 'Tipo 3'];

    guardarPlantilla() {
      // Lógica para guardar la plantilla
    }

    cancelar() {
      // Lógica para cancelar la acción
    }
}
