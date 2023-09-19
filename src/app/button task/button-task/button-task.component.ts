import { Component } from '@angular/core';

@Component({
  selector: 'app-button-task',
  templateUrl: './button-task.component.html',
  styleUrls: ['./button-task.component.css']
})
export class ButtonTaskComponent {
  isMessageShown = false;
  log=[];

  onDisplayDetails(){
    this.isMessageShown = !this.isMessageShown;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
  
  constructor(){

    
  }

 

  // colorR;
  // colorG;
  // colorB;
  // getRandomColor(){
  //   this.colorR = Math.floor(Math.random()*255);
  //   this.colorG = Math.floor(Math.random()*255);
  //   this.colorB = Math.floor(Math.random()*255);
  //   return 'rgba('+this.colorR+', '+this.colorG+', '+this.colorB+', 35)';
  // }
  // getRandomBorderColor(){
  //   return '2px' + this.getRandomColor;
  // }

}
