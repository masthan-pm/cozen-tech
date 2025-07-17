import { Directive, ElementRef, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[scrollTrigger]',
  standalone: true
})
export class ScrollTriggerDirective implements OnInit, OnDestroy {
  @Input() triggerOffset: number = 100; // pixels from viewport
  @Input() triggerOnce: boolean = true;
  @Input() triggerClass: string = 'scroll-triggered';
  
  @Output() triggered = new EventEmitter<boolean>();

  private scrollListener!: () => void;
  private hasTriggered = false;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setupScrollListener();
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  private setupScrollListener() {
    this.scrollListener = () => {
      this.checkTrigger();
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
    
    // Check immediately in case element is already in view
    this.checkTrigger();
  }

  private checkTrigger() {
    if (this.triggerOnce && this.hasTriggered) {
      return;
    }

    const element = this.el.nativeElement;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    const isInView = rect.top < (windowHeight - this.triggerOffset) && rect.bottom > this.triggerOffset;

    if (isInView && !this.hasTriggered) {
      this.hasTriggered = true;
      element.classList.add(this.triggerClass);
      this.triggered.emit(true);
    } else if (!isInView && !this.triggerOnce && this.hasTriggered) {
      this.hasTriggered = false;
      element.classList.remove(this.triggerClass);
      this.triggered.emit(false);
    }
  }
}