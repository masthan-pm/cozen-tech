import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' = 'fadeInUp';
  @Input() animationDelay: number = 0;
  @Input() animationDuration: number = 600;
  @Input() threshold: number = 0.1;

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Delay setup to improve initial load performance
    requestAnimationFrame(() => {
      this.setupInitialState();
      this.setupIntersectionObserver();
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupInitialState() {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transition = `opacity ${this.animationDuration}ms ease-out, transform ${this.animationDuration}ms ease-out`;
    element.style.transitionDelay = `${this.animationDelay}ms`;

    switch (this.animationType) {
      case 'fadeInUp':
        element.style.transform = 'translateY(30px)';
        break;
      case 'fadeInDown':
        element.style.transform = 'translateY(-30px)';
        break;
      case 'fadeInLeft':
        element.style.transform = 'translateX(-30px)';
        break;
      case 'fadeInRight':
        element.style.transform = 'translateX(30px)';
        break;
      case 'scaleIn':
        element.style.transform = 'scale(0.9)';
        break;
      case 'slideInUp':
        element.style.transform = 'translateY(50px)';
        break;
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: this.threshold,
      rootMargin: '0px 0px -10px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.animateIn(entry.target as HTMLElement);
          this.hasAnimated = true;
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateIn(element: HTMLElement) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0) translateX(0) scale(1)';

    // Disconnect observer after animation to prevent re-triggering
    this.observer.unobserve(element);
  }
}