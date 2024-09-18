import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal-usuario-externo',
    templateUrl: './modal-usuario-externo.component.html',
    styleUrl: './modal-usuario-externo.component.css',
})
export class ModalUsuarioExternoComponent{
    @Input() externalGroups: any;
    sortColumn: string = '';
    sortDirection: 'asc' | 'desc' = 'asc';

    sortTable(column: string) {
        if (this.sortColumn === column) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortDirection = 'asc';
        }
        this.sortColumn = column;

        this.externalGroups.sort((a:any, b:any) => {
            const valueA = a[column as keyof typeof a];
            const valueB = b[column as keyof typeof b];

            if (valueA < valueB) {
                return this.sortDirection === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
                return this.sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }
}
