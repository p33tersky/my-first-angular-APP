import { Component, EventEmitter, Output } from '@angular/core';

interface Color {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-second-binding-components-task',
  templateUrl: './second-binding-components-task.component.html',
  styleUrls: ['./second-binding-components-task.component.css']
})

export class SecondBindingComponentsTaskComponent {
  @Output() boldSubmitted = new EventEmitter<{name: string, message: string, color: string}>();
  @Output() italicSubmitted = new EventEmitter<{name: string, message: string, color: string}>();

  yourName;
  chosenColor;
  areColorAndNameSubmitted = false;




  onSubmitName(givenName, givenColor){
    this.areColorAndNameSubmitted = true;
    this.yourName = givenName;
    this.chosenColor = givenColor;
  }


  onSubmitItalic(givenName, givenColor){
    this.onSubmitName(givenName, givenColor),
    this.italicSubmitted.emit({name: this.yourName, message: "You choose italic font, nice", color: this.chosenColor});
    
  }
  onSubmitBold(givenName, givenColor){
    this.onSubmitName(givenName, givenColor),
    this.boldSubmitted.emit({name: this.yourName, message: "Oh, bold font, I do not like it",color:this.chosenColor});
  }
  selectedColor;
  
    colors: Color[] = [
      {value: 'green', viewValue: 'Green'},
      {value: 'red', viewValue: 'Red'},
      {value: 'blue', viewValue: 'Blue'},
    ];

}
