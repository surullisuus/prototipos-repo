import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-permisos-lectura-interno-modal',
  templateUrl: './permisos-lectura-interno-modal.component.html',
  styleUrl: './permisos-lectura-interno-modal.component.css',
})
export class PermisosLecturaInternoModalComponent  {
    @Input() internalGroups: any[] = [];
    @Input() internalGroupsPermissions: any[] = [];
    @Input() showModalApplyPermissions!: () => void;
}
