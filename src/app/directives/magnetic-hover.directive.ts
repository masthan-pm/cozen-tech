import { Directive, ElementRef, OnInit, OnDestroy, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[magneticHover]',
  standalone: true
})
export class MagneticHoverDirective implements OnInit, OnDestroy {
  @Input() magneticStrength: number = 0.3;
  @Input() magneticSpeed: number = 0.2;

  private element: HTMLElement;
  private boundMouseMove: (e: MouseEvent) => void;
  private boundMouseLeave: () => void;
  private animationFrame?: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.element = this.el.nativeElement;
    this.boundMouseMove = this.onMouseMove.bind(this);
    this.boundMouseLeave = this.onMouseLeave.bind(this);
  }

  ngOnInit() {
    this.setupMagneticEffect();
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private setupMagneticEffect() {
    this.renderer.setStyle(this.element, 'transition', 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)');
    
    this.renderer.listen(this.element, 'mouseenter', () => {
      this.renderer.listen('document', 'mousemove', this.boundMouseMove);
    });

    this.renderer.listen(this.element, 'mouseleave', this.boundMouseLeave);
  }

  private onMouseMove(e: MouseEvent) {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }

    this.animationFrame = requestAnimationFrame(() => {
      const rect = this.element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * this.magneticStrength;
      const deltaY = (e.clientY - centerY) * this.magneticStrength;

      this.renderer.setStyle(
        this.element, 
        'transform', 
        `translate(${deltaX}px, ${deltaY}px) scale(1.02)`
      );
    });
  }

  private onMouseLeave() {
    this.cleanup();
    this.renderer.setStyle(this.element, 'transform', 'translate(0px, 0px) scale(1)');
  }

  private cleanup() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.renderer.listen('document', 'mousemove', this.boundMouseMove)?.();
  }
}