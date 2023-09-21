import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.getRandomColor());
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue');

  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.getRandomColor());
    this.backgroundColor = this.defaultColor
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
  }


  // randomR: number
  // randomG: number
  // randomB: number

  // getRandomColor() {
  //   this.randomR = Math.floor(Math.random() * 255)
  //   this.randomG = Math.floor(Math.random() * 255)
  //   this.randomB = Math.floor(Math.random() * 255)

  //   return 'rgb(' + this.randomR + ', ' + this.randomG + ', ' + this.randomB + ')'
  // }
}

