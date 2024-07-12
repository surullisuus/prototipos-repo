import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-roles-modal',
  templateUrl: './add-roles-modal.component.html',
  styleUrl: './add-roles-modal.component.css',
})
export class AddRolesModalComponent {
    @Input() internalGroups: any;
    @Input() showModalAddPermissions!: () => void;

    onCancel(event: Event) {
        event.preventDefault();
    }

    onAddRoles(event: Event) {
        event.preventDefault();
        this.showModalAddPermissions();
    }
}
