import { Component, Input, OnInit, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { TESTIMONIAL_CONST } from '../../../constants/home/testimonials.constants';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';

interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating?: number; // Optional rating field
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ScrollRevealDirective, StaggerAnimationDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  @Input() header: string = TESTIMONIAL_CONST.HEADER;
  @Input() content: string = TESTIMONIAL_CONST.CONTENT;
  @ViewChildren('testimonialCard') testimonialCards!: QueryList<ElementRef>;

  testimonials: Testimonial[] = TESTIMONIAL_CONST.TESTIMONIALS;
  stars = Array(5).fill(0);

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    // Add intersection observer for enhanced animations
    this.setupIntersectionObserver();
  }

  ngAfterViewInit(): void {
    // Add mouse tracking for glass effect enhancement
    this.setupMouseTracking();
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

    // Observe testimonial cards when they become available
    setTimeout(() => {
      const cards = this.elementRef.nativeElement.querySelectorAll('.testimonial-card');
      cards.forEach((card: Element) => observer.observe(card));
    }, 100);
  }

  private setupMouseTracking(): void {
    const cards = this.elementRef.nativeElement.querySelectorAll('.testimonial-card');

    cards.forEach((card: HTMLElement) => {
      card.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `
          translateY(-12px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.02)
        `;

        // Create dynamic spotlight effect
        const spotlight = card.querySelector('.inner-glow') as HTMLElement;
        if (spotlight) {
          spotlight.style.background = `
            radial-gradient(
              circle at ${x}px ${y}px,
              rgba(102, 126, 234, 0.15) 0%,
              rgba(79, 172, 254, 0.08) 30%,
              transparent 70%
            )
          `;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0) scale(1)';

        // Reset spotlight effect
        const spotlight = card.querySelector('.inner-glow') as HTMLElement;
        if (spotlight) {
          spotlight.style.background = `
            radial-gradient(
              circle at 30% 30%,
              rgba(102, 126, 234, 0.05) 0%,
              transparent 50%
            )
          `;
        }
      });
    });
  }

  // Method to get star array for specific testimonial rating
  getStarsForRating(rating: number = 5): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  // Method to track testimonial interactions for analytics
  onTestimonialClick(testimonial: Testimonial, index: number): void {
    // Add your analytics tracking here
    console.log('Testimonial clicked:', { testimonial: testimonial.name, position: index });
  }

  // Method to handle image load errors
  onImageError(event: any): void {
    event.target.src = 'assets/shared/clients/testimonials/default-avatar.svg';
  }
}