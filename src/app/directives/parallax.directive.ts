import { Directive, ElementRef, OnInit, OnDestroy, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[parallax]',
  standalone: true
})
export class ParallaxDirective implements OnInit, OnDestroy {
  @Input() parallaxSpeed: number = 0.5;
  @Input() parallaxDirection: 'up' | 'down' | 'left' | 'right' = 'up';

  private scrollListener!: () => void;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.setupParallax();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private setupParallax() {
    this.scrollListener = this.renderer.listen('window', 'scroll', () => {
      this.updateParallax();
    });
  }

  private updateParallax() {
    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const scrolled = window.pageYOffset;
    const rate = scrolled * -this.parallaxSpeed * 0.5; // Reduced intensity

    let transform = '';
    switch (this.parallaxDirection) {
      case 'up':
        transform = `translateY(${rate}px)`;
        break;
      case 'down':
        transform = `translateY(${-rate}px)`;
        break;
      case 'left':
        transform = `translateX(${rate}px)`;
        break;
      case 'right':
        transform = `translateX(${-rate}px)`;
        break;
    }

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      this.renderer.setStyle(element, 'transform', transform);
    });
  }
}