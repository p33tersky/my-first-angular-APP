import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
   @Input() element: {name: string, font: string, message: string, color: string}

  bindingElements = [{humorStatus: null}];


}
