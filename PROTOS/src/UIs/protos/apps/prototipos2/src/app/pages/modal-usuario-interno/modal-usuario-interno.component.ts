import { Component, ElementRef, Input, ViewChild } from '@angular/core';


@Component({
  selector: 'app-modal-usuario-interno',
  templateUrl: './modal-usuario-interno.component.html',
  styleUrl: './modal-usuario-interno.component.css',
})
export class ModalUsuarioInternoComponent {
  @Input() internalGroups: any;
  @Input() internalGroupsPermissions: any;
  @ViewChild('openbuttonPermisosRolesInterno') openbuttonPermisosRolesInterno!: ElementRef;
  @Input() showModalApplyPermissions!: () => void;

  @Input() showModalDeleteRegister!: (internalId: number) => void;

  onViewPermisosLecturaInterno() {
    if(this.openbuttonPermisosRolesInterno){
      this.openbuttonPermisosRolesInterno.nativeElement.click();
    }
  }

  sortColumnName: string = '';
  sortOrder: 'asc' | 'desc' = 'asc';

  sortColumn(columnName: string) {
    if (this.sortColumnName === columnName) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumnName = columnName;
      this.sortOrder = 'asc';
    }
    this.internalGroups.sort((a: any, b: any) => {
      const aValue = a[columnName].toLowerCase();
      const bValue = b[columnName].toLowerCase();
      if (aValue < bValue) {
        return this.sortOrder === 'asc' ? -1 : 1;
      } else if (aValue > bValue) {
        return this.sortOrder === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}
