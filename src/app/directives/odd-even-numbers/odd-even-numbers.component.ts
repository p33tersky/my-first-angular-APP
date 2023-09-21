import { Component } from '@angular/core';

@Component({
  selector: 'app-odd-even-numbers',
  templateUrl: './odd-even-numbers.component.html',
  styleUrls: ['./odd-even-numbers.component.css']
})
export class OddEvenNumbersComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7];
  onlyOdd = false;
  buttonName() {
    return this.onlyOdd === true ? 'even' : 'odd';
  }
  oddNumbers = [1, 3, 5, 7]
  evenNumbers = [2, 4, 6]

  onAddEvenNumber() {
    this.evenNumbers.push(this.evenNumbers.at(this.evenNumbers.length - 1) + 2)
  }
  onAddOddNumber() {
    this.oddNumbers.push(this.oddNumbers.at(this.oddNumbers.length - 1) + 2)
  }

  value = 10;

}
