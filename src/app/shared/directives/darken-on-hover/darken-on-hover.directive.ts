import { Directive, ElementRef, HostListener, Input, Renderer, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDarkenOnHover]'
})
export class DarkenOnHoverDirective {
  @Input() brightness = '70';

  constructor(
    private element: ElementRef,
    private render: Renderer2) {
  }

  @HostListener('mouseover')
  darkenOn() {
    this.changeBrightness(this.brightness);
  }

  @HostListener('mouseleave')
  darkenOff() {
    this.changeBrightness('100')
  }

  private changeBrightness(brightnessValue: string) {
    this.render.setStyle(this.element.nativeElement, 'filter', `brightness(${brightnessValue}%)`);
  }
}
