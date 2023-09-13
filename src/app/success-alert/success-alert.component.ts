import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: "./success-alert.component.html",
  styles:[
    `
    p {
      padding: 20px;
      background-color: lightGreen; 
      border: 2px solid green;
    }
    `
  ]
})
export class SuccessAlertComponent {

}
