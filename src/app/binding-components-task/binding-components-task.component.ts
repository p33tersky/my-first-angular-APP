import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-binding-components-task',
  templateUrl: './binding-components-task.component.html',
  styleUrls: ['./binding-components-task.component.css']
})
export class BindingComponentsTaskComponent {
  @Input() bindingElement: {humorStatus: number};
  responses=[];
  numberOfClicks=0;

  onHavingGoodHumor(){
    this.bindingElement.humorStatus = 1;
    this.numberOfClicks ++;
  }
  onHavingBadHumor(){
    this.bindingElement.humorStatus = -1
    this.numberOfClicks ++;

  }

onHavingNormalHumor(){
  this.bindingElement.humorStatus = 0
  this.numberOfClicks ++;

}

getColor(){
  if (this.bindingElement.humorStatus === 1) return 'lightGreen';
  if (this.bindingElement.humorStatus === -1) return 'mistyRose';
  if (this.bindingElement.humorStatus === 0) return 'lightYellow';
}

getResponseToHumorStatus(humorStatusValue ){
  if(this.clicksOnYesCounter  % 5 === 0){
    return "stop spaming!"
  }
  if(this.numberOfClicks>4){
    return "you are undecided"
  }
  if(humorStatusValue === 1){
    return "nice to  heare it, keep it up!"
  } else if (humorStatusValue === -1){
    return "hurry up, don't be so sad!"
  } else if (humorStatusValue === 0){
    return "poteto, potato..."
  }
}


clicksOnYesCounter = 0;
onChoosingNO(){
  this.bindingElement.humorStatus = 2;
}

onChoosingYes(){
  this.clicksOnYesCounter ++;
  this.responses.push(this.getResponseToHumorStatus(this.bindingElement.humorStatus))
}

isHumorStatusChosen(){
  return  this.bindingElement.humorStatus === 0 || this.bindingElement.humorStatus === 1 || this.bindingElement.humorStatus === -1
}

}
