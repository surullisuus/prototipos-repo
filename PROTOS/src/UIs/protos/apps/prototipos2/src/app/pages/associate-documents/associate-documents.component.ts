import {  Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-associate-documents',
    templateUrl: './associate-documents.component.html',
    styleUrl: './associate-documents.component.css',
})
export class AssociateDocumentsComponent {
    public data = [
        {
          id: 1,
          numeroRadicado: '234',
          fechaRadicacion: '01/12/2022',
          seleccionado: false,
        },
        {
          id: 2,
          numeroRadicado: '235',
          fechaRadicacion: '01/12/2022',
          seleccionado: false,
        },
      ];
      subscription!: Subscription;
      formQueryScheme!: FormGroup;

      constructor(private readonly fb: FormBuilder) {}

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

 }
