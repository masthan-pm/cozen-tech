import { Directive, ElementRef, OnInit, OnDestroy, Input, QueryList, ContentChildren, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[staggerAnimation]',
  standalone: true
})
export class StaggerAnimationDirective implements OnInit, OnDestroy, AfterContentInit {
  @Input() staggerDelay: number = 100; // milliseconds between each item
  @Input() animationDuration: number = 600;
  @Input() threshold: number = 0.1;

  private observer!: IntersectionObserver;
  private children: HTMLElement[] = [];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupObserver();
  }

  ngAfterContentInit() {
    this.findStaggerItems();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private findStaggerItems() {
    const staggerItems = this.el.nativeElement.querySelectorAll('.stagger-item');
    this.children = Array.from(staggerItems);
    
    // Set initial state for all items
    this.children.forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(50px)';
      child.style.transition = `all ${this.animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
      child.style.transitionDelay = `${index * this.staggerDelay}ms`;
    });
  }

  private setupObserver() {
    const options = {
      threshold: this.threshold,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateChildren();
          this.observer.unobserve(entry.target);
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private animateChildren() {
    this.children.forEach((child, index) => {
      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
        
        // Add a subtle bounce effect
        setTimeout(() => {
          child.style.transform = 'translateY(-5px)';
          setTimeout(() => {
            child.style.transform = 'translateY(0)';
          }, 150);
        }, this.animationDuration - 200);
      }, index * this.staggerDelay);
    });
  }
}