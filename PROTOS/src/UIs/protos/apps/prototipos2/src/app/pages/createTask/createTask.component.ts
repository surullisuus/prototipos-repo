import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './createTask.component.html',
  styleUrl: './createTask.component.css',
})
export class CreateTaskComponent {
  campos = [{ id: 1 }, { id: 2 }, { id: 3 }];

  agregarCampo() {
    const nuevoCampo = { id: this.campos.length + 1 };
    this.campos.push(nuevoCampo);
  }

  eliminarCampo(campo: any) {
    this.campos = this.campos.filter(c => c !== campo);
  }
}
