import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  task?: any;
  loading = true;

  constructor(private _route: ActivatedRoute) {
    _route.params.subscribe((params) => {
      this.task = params['id'];
    });

    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
