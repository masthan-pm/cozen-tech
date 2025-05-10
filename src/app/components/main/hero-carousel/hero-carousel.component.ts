import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { interval, Subscription } from 'rxjs';

export interface CarouselSlide {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('600ms ease-in-out')]),
    ]),
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  @Input() slides: CarouselSlide[] = [];
  @Input() autoplayInterval: number = 5000; // milliseconds
  @Input() showIndicators: boolean = true;
  @Input() showArrows: boolean = true;
  @Input() showProgressBar: boolean = true;

  @ViewChild('progressBar') progressBarRef?: ElementRef;

  currentSlideIndex: number = 0;
  progressValue: number = 0;
  private autoplaySubscription?: Subscription;
  private progressAnimationId?: number;
  private interactionTimeout: any;
  isUserInteracting: boolean = false;
  private lastTimestamp: number = 0;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.startAutoplay();
    this.startProgressAnimation();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.stopProgressAnimation();
    clearTimeout(this.interactionTimeout);
  }

  startAutoplay(): void {
    if (this.slides.length <= 1) return;

    this.autoplaySubscription = interval(this.autoplayInterval).subscribe(() => {
      if (!this.isUserInteracting) {
        this.nextSlide();
      }
    });
  }

  stopAutoplay(): void {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe();
    }
  }

  startProgressAnimation(): void {
    if (this.slides.length <= 1 || !this.showProgressBar) return;

    this.progressValue = 0;
    this.lastTimestamp = performance.now();

    this.ngZone.runOutsideAngular(() => {
      this.animateProgress();
    });
  }

  stopProgressAnimation(): void {
    if (this.progressAnimationId) {
      cancelAnimationFrame(this.progressAnimationId);
    }
  }

  animateProgress(): void {
    const currentTime = performance.now();
    const delta = currentTime - this.lastTimestamp;
    this.lastTimestamp = currentTime;

    if (!this.isUserInteracting) {
      // Calculate progress based on elapsed time
      const increment = (delta / this.autoplayInterval) * 100;
      this.progressValue = Math.min(this.progressValue + increment, 100);

      if (this.progressBarRef?.nativeElement) {
        this.progressBarRef.nativeElement.style.width = `${this.progressValue}%`;
      }
    }

    this.progressAnimationId = requestAnimationFrame(() => this.animateProgress());
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.resetProgress();
    this.handleUserInteraction();
  }

  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.resetProgress();
    this.handleUserInteraction();
  }

  goToSlide(index: number): void {
    if (index !== this.currentSlideIndex) {
      this.currentSlideIndex = index;
      this.resetProgress();
      this.handleUserInteraction();
    }
  }

  resetProgress(): void {
    this.progressValue = 0;
    if (this.progressBarRef?.nativeElement) {
      this.progressBarRef.nativeElement.style.width = '0%';
    }
  }

  handleUserInteraction(): void {
    // Pause autoplay briefly when user interacts
    this.isUserInteracting = true;
    clearTimeout(this.interactionTimeout);

    this.interactionTimeout = setTimeout(() => {
      this.isUserInteracting = false;
    }, 3000);
  }

  getBackgroundStyle(slide: CarouselSlide): object {
    return {
      'background-image': `url(${slide.backgroundImage})`,
    };
  }
}