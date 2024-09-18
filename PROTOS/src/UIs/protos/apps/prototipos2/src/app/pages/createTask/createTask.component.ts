import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './createTask.component.html',
  styleUrl: './createTask.component.css',
})
export class CreateTaskComponent implements OnInit {
  formQueryScheme!: FormGroup;
  campos: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formQueryScheme = this.fb.group({
      tarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      tiempoTarea: ['', Validators.required],
      tiempoAlerta: ['', Validators.required],
    });
  }

  agregarCampo() {
    this.campos.push({});
  }

  eliminarCampo(campo: any) {
    this.campos = this.campos.filter(c => c !== campo);
  }
}
