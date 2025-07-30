import { Component, Input, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
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
export class FeaturesComponent implements OnInit, AfterViewInit {
  @Input() header: string = 'Key Features';
  @Input() subheader: string = 'Comprehensive features designed to meet your business needs';
  @Input() features: Array<{
    category: string;
    items: string[];
  }> = [];

  @ViewChildren('featureCard') featureCards!: QueryList<ElementRef>;

  hoveredFeature: number | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Add intersection observer for enhanced animations
    this.setupIntersectionObserver();
  }

  ngAfterViewInit(): void {
    // Add mouse tracking for enhanced glass effects
    this.setupMouseTracking();
  }

  onFeatureHover(index: number, isHovered: boolean): void {
    this.hoveredFeature = isHovered ? index : null;
  }

  getCategoryIcon(index: number): string {
    const icons = [
      'code',
      'security',
      'support_agent',
      'integration_instructions',
      'analytics',
      'cloud',
      'devices',
      'settings'
    ];
    return icons[index] || 'star';
  }

  getFeatureProgress(index: number): number {
    const progress = [95, 88, 92, 85, 90, 87, 93, 89];
    return progress[index] || 90;
  }

  private setupIntersectionObserver(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Add staggered animation delay
            const index = Array.from(entry.target.parentNode!.children).indexOf(entry.target);
            (entry.target as HTMLElement).style.animationDelay = `${index * 150}ms`;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe feature cards when they become available
    setTimeout(() => {
      const cards = this.elementRef.nativeElement.querySelectorAll('.feature-card');
      cards.forEach((card: Element) => observer.observe(card));
    }, 100);
  }

  private setupMouseTracking(): void {
    const cards = this.elementRef.nativeElement.querySelectorAll('.feature-card');

    cards.forEach((card: HTMLElement) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;

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
              rgba(102, 126, 234, 0.2) 0%,
              rgba(79, 172, 254, 0.1) 30%,
              rgba(0, 178, 178, 0.05) 70%,
              transparent 100%
            )
          `;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';

        // Reset spotlight effect
        const spotlight = card.querySelector('.gradient-overlay') as HTMLElement;
        if (spotlight) {
          spotlight.style.background = `
            linear-gradient(
              135deg,
              rgba(102, 126, 234, 0.05) 0%,
              rgba(79, 172, 254, 0.03) 50%,
              rgba(0, 178, 178, 0.05) 100%
            )
          `;
        }
      });
    });
  }

  // Method to track feature interactions for analytics
  onFeatureClick(feature: any, index: number): void {
    // Add your analytics tracking here
    console.log('Feature clicked:', { feature: feature.category, position: index });
  }

  // Method to get feature completion percentage based on items count
  getFeatureCompletionRate(feature: any): number {
    // Calculate completion based on number of items (more items = higher completion)
    const baseRate = 70;
    const itemBonus = Math.min(feature.items.length * 5, 25);
    return Math.min(baseRate + itemBonus, 100);
  }

  // Method to get feature priority level
  getFeaturePriority(index: number): 'high' | 'medium' | 'low' {
    const priorities = ['high', 'high', 'medium', 'medium', 'high', 'low', 'medium', 'high'];
    return priorities[index] as 'high' | 'medium' | 'low' || 'medium';
  }

  // Method to get feature status
  getFeatureStatus(index: number): 'active' | 'coming-soon' | 'beta' {
    const statuses = ['active', 'active', 'active', 'beta', 'active', 'coming-soon', 'active', 'active'];
    return statuses[index] as 'active' | 'coming-soon' | 'beta' || 'active';
  }
}