import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Solicitud de procesos';

  showNotification = true;

  get show() {
    return this.showNotification;
  }
}
