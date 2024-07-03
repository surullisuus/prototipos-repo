import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task-config',
  templateUrl: './create-task-config.component.html',
  styleUrl: './create-task-config.component.css',
})
export class CreateTaskConfigComponent {
  ableTaskDays = false;
  ableTaskHours = false;

  ableAlertDays = false;
  ableAlertHours = false;

  campos:any[] = [];

  agregarCampo() {
    const nuevoCampo = { id: this.campos.length + 1 };
    this.campos.push(nuevoCampo);
  }

  eliminarCampo(campo: any) {
    this.campos = this.campos.filter(c => c !== campo);
  }

  onAbleTaskDays() {
    this.ableTaskDays = !this.ableTaskDays;
    this.ableTaskHours = false;
  }

  onAbleTaskHours() {
    this.ableTaskDays = false;
    this.ableTaskHours = !this.ableTaskHours;
  }

  onAbleAlertDays() {
    this.ableAlertDays = !this.ableAlertDays;
    this.ableAlertHours = false;
  }

  onAbleAlertHours() {
    this.ableAlertDays = false;
    this.ableAlertHours = !this.ableAlertHours;
  }

  get taskDays() {
    return this.ableTaskDays;
  }

  get taskHours() {
    return this.ableTaskHours;
  }

  get alertDays() {
    return this.ableAlertDays;
  }

  get alertHours() {
    return this.ableAlertHours;
  }
}
