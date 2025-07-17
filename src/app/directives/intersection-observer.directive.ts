import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';

@Directive({
  selector: '[intersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() threshold: number = 0.1;
  @Input() rootMargin: string = '0px';
  @Input() triggerOnce: boolean = true;
  
  @Output() intersecting = new EventEmitter<boolean>();
  @Output() intersectionRatio = new EventEmitter<number>();

  private observer!: IntersectionObserver;
  private hasTriggered = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupObserver() {
    const options = {
      threshold: this.threshold,
      rootMargin: this.rootMargin
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const isIntersecting = entry.isIntersecting;
        
        if (this.triggerOnce && this.hasTriggered && !isIntersecting) {
          return;
        }

        if (isIntersecting) {
          this.hasTriggered = true;
        }

        this.intersecting.emit(isIntersecting);
        this.intersectionRatio.emit(entry.intersectionRatio);
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }
}