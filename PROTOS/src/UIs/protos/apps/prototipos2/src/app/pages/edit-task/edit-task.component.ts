import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  task?: any;
  loading = true;
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

  constructor(private _route: ActivatedRoute) {
    _route.params.subscribe((params) => {
      this.task = params['id'];
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
