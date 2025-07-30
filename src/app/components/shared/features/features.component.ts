import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective
  ],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements AfterViewInit {
  @Input() header: string = 'Key Features';
  @Input() subheader: string = 'Comprehensive features designed to meet your business needs';
  @Input() features: Array<{
    category: string;
    items: string[];
  }> = [];


  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setupMouseTracking();
    }, 100);
  }

  private setupMouseTracking(): void {
    const cards = this.elementRef.nativeElement.querySelectorAll('.feature-card');

    cards.forEach((card: HTMLElement) => {
      let isHovering = false;
      let animationFrameId: number;

      card.addEventListener('mousemove', (e: MouseEvent) => {
        if (!isHovering) return;

        // Use requestAnimationFrame for smoother performance
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }

        animationFrameId = requestAnimationFrame(() => {
          this.updateCardTransform(card, e);
        });
      });

      card.addEventListener('mouseenter', () => {
        isHovering = true;
      });

      card.addEventListener('mouseleave', () => {
        isHovering = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        this.resetCardTransform(card);
      });
    });
  }

  private updateCardTransform(card: HTMLElement, e: MouseEvent): void {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20; // Reduced intensity for smoother performance
        const rotateY = (centerX - x) / 20;

        card.style.transform = `
          translateY(-20px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.02)
        `;

        // Create dynamic spotlight effect
        const spotlight = card.querySelector('.gradient-overlay') as HTMLElement;
        if (spotlight) {
          spotlight.style.background = `
            radial-gradient(
              circle at ${x}px ${y}px,
              rgba(79, 172, 254, 0.25) 0%,
              rgba(0, 242, 254, 0.15) 30%,
              rgba(79, 172, 254, 0.08) 70%,
              transparent 100%
            )
          `;
        }
  }

  private resetCardTransform(card: HTMLElement): void {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';

        // Reset spotlight effect
        const spotlight = card.querySelector('.gradient-overlay') as HTMLElement;
        if (spotlight) {
          spotlight.style.background = `
            linear-gradient(
              135deg,
              rgba(79, 172, 254, 0.08) 0%,
              rgba(0, 242, 254, 0.05) 50%,
              rgba(79, 172, 254, 0.08) 100%
            )
          `;
        }
  }
}