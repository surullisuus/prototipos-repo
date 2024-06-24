import { Component, ElementRef, ViewChild } from '@angular/core';
import { DialogType } from '../../components/dialog/models/dialog-type';
import { Subscription } from 'rxjs';
import { DialogService } from '../../components/dialog/services/dialog.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-associate-entry-doc',
  templateUrl: './associate-entry-doc.component.html',
  styleUrl: './associate-entry-doc.component.css',
})
export class AssociateEntryDocComponent {
  @ViewChild('openbuttonpreliminarView')
  openbuttonassociateEntryDoc!: ElementRef;

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
