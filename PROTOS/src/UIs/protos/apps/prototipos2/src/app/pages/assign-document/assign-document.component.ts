import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';


interface FiledRequest {
  numeroRadicado: number;
  fechaRadicado: Date;
}

@Component({
  selector: 'app-assign-document',
  templateUrl: './assign-document.component.html',
  styleUrls: ['./assign-document.component.css']
})
export class AssignDocumentComponent {

  filedRequests: FiledRequest[] = [
    {
      numeroRadicado: 123,
      fechaRadicado: new Date("2023-02-01")
    },
    {
      numeroRadicado: 456,
      fechaRadicado: new Date("2023-06-17")
    }
  ];
  formQueryScheme!: FormGroup;


  constructor( private readonly fb: FormBuilder,){}
  
  ngOnInit(): void {
  this.formQueryScheme = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      number: [null],
      date: [null],
    });
  }
}
