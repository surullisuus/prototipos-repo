import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ver-radicado-view',
  templateUrl: './verRadicadoView.component.html',
  styleUrl: './verRadicadoView.component.css',
})
export class VerRadicadoViewComponent {
  @Input() documentId: string | undefined;
}
