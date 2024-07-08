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

}
