import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-task-details',
  templateUrl: './see-task-details.component.html',
  styleUrl: './see-task-details.component.css',
})
export class SeeTaskDetailsComponent {
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
