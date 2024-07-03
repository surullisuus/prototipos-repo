import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-see-radicado',
  templateUrl: './see-radicado.component.html',
  styleUrl: './see-radicado.component.css',
})
export class SeeRadicadoComponent {
  @ViewChild('dialog', { read: ViewContainerRef }) dialog!: ViewContainerRef;

  subscription!: Subscription;
}
