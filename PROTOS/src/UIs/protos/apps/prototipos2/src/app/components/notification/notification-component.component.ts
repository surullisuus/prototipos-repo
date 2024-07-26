import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification-component',
  templateUrl: './notification-component.component.html',
  styleUrl: './notification-component.component.css',
})
export class NotificationComponentComponent implements OnInit {
  @Input() text = '';
  @Input() type: 'asuccess' | 'aerror' | 'anotificacion' = 'anotificacion';
  @Input() link = null;
  @Input() showNotification = false;

  showNotificationFor = 10000; // Time in ms to show the notification

  ngOnInit() {
    setTimeout(() => {
      this.showNotification = false;
    }, this.showNotificationFor);
  }

  get show() {
    return this.showNotification;
  }
}
