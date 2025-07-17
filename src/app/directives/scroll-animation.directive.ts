import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationType: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp' = 'fadeInUp';
  @Input() animationDelay: number = 0;
  @Input() animationDuration: number = 800;
  @Input() threshold: number = 0.1;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupIntersectionObserver();
    this.setupInitialState();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupInitialState() {
    const element = this.el.nativeElement;
    element.style.opacity = '0';
    element.style.transition = `all ${this.animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
    element.style.transitionDelay = `${this.animationDelay}ms`;

    switch (this.animationType) {
      case 'fadeInUp':
        element.style.transform = 'translateY(50px)';
        break;
      case 'fadeInDown':
        element.style.transform = 'translateY(-50px)';
        break;
      case 'fadeInLeft':
        element.style.transform = 'translateX(-50px)';
        break;
      case 'fadeInRight':
        element.style.transform = 'translateX(50px)';
        break;
      case 'scaleIn':
        element.style.transform = 'scale(0.8)';
        break;
      case 'slideInUp':
        element.style.transform = 'translateY(100px)';
        break;
    }
  }

  private setupIntersectionObserver() {
    const options = {
      threshold: this.threshold,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateIn(entry.target as HTMLElement);
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