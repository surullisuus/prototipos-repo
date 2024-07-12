import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-usuario-externo',
    templateUrl: './modal-usuario-externo.component.html',
    styleUrl: './modal-usuario-externo.component.css',
})
export class ModalUsuarioExternoComponent{
    @Input() externalGroups: any;
}
