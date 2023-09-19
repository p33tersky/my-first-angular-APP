import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h2{
    color: green;
  }
  `],
})
export class AppComponent {
  bindingElements = [{humorStatus: 0},{humorStatus: -1},{humorStatus: null}];
  nameProviders = [];



  onItalicFontSubmitted(italicData: {name: string, message: string, color: string}){
    this.nameProviders.push({
      name: italicData.name,
      font: 'italic',
      message: italicData.message,
      color: italicData.color
    })
    
  }
  onBoldFontSubmitted(boldData: {name: string, message: string, color: string}){
    this.nameProviders.push({
      name: boldData.name,
      font: 'bold',
      message: boldData.message,
      color: boldData.color
    })
  }
 
}
