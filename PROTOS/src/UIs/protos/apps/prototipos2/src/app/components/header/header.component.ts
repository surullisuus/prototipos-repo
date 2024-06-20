import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'subsidios-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('notifyLogout') notifyLogout!: ElementRef;
  

  constructor() {
   
  }

  logout() {
   

  }



  onAcceptModal(event: string) {
 
  }

  onCancelModal(event: string) { }

  onCloseModal(event: string) { }

  changePassword() {
  
  }
}
