import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHightlight]'
})
export class AppHightlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    /* this.el.nativeElement.style.backgroundImage = '../assets/img/pokemonLogo.png'; */
  }
}
