import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealDistance: number = 100;
  @Input() revealDuration: number = 1000;
  @Input() revealDelay: number = 0;
  @Input() revealEasing: string = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupRevealAnimation();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupRevealAnimation() {
    const element = this.el.nativeElement;
    
    // Initial state
    element.style.opacity = '0';
    element.style.transform = `translateY(${this.revealDistance}px)`;
    element.style.transition = `all ${this.revealDuration}ms ${this.revealEasing}`;
    element.style.transitionDelay = `${this.revealDelay}ms`;

    // Setup intersection observer
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.reveal(entry.target as HTMLElement);
        }
      });
    }, options);

    this.observer.observe(element);
  }

  private reveal(element: HTMLElement) {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
    
    // Add a subtle bounce effect
    setTimeout(() => {
      element.style.transform = 'translateY(-5px)';
      setTimeout(() => {
        element.style.transform = 'translateY(0)';
      }, 150);
    }, this.revealDuration - 200);

    this.observer.unobserve(element);
  }
}