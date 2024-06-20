import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parts-process',
  templateUrl: './parts-process.component.html',
  styleUrls: ['./parts-process.component.css'],
})
export class PartsProcessComponent {

   partes = [
    {
      tipoParte: 'Cliente',
      noIdentificacion: 12345678,
      nombreRazonSocial: 'Juan Pérez',
      departamento: 'Cundinamarca',
      municipio: 'Bogotá',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 87654321,
      nombreRazonSocial: 'María López',
      departamento: 'Antioquia',
      municipio: 'Medellín',
    },
    {
      tipoParte: 'Cliente',
      noIdentificacion: 11223344,
      nombreRazonSocial: 'Carlos Mendoza',
      departamento: 'Valle del Cauca',
      municipio: 'Cali',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 44332211,
      nombreRazonSocial: 'Ana Torres',
      departamento: 'Santander',
      municipio: 'Bucaramanga',
    },
    {
      tipoParte: 'Cliente',
      noIdentificacion: 55667788,
      nombreRazonSocial: 'Luis Gómez',
      departamento: 'Bolívar',
      municipio: 'Cartagena',
    },
    {
      tipoParte: 'Proveedor',
      noIdentificacion: 88776655,
      nombreRazonSocial: 'Laura Ramírez',
      departamento: 'Atlántico',
      municipio: 'Barranquilla',
    },
  ];

 
  formQueryScheme!: FormGroup;


  constructor( private readonly fb: FormBuilder,
    private router: Router
  ){}
  
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
  
  onCreatePart(){
    this.router.navigate(['/crear-parte']);
  }

}
