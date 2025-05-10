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
    trigger('scaleAnimation', [
      transition(':enter', [
        style({ transform: 'scale(0.8)', opacity: 0 }),
        animate('600ms 300ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
    ]),
    trigger('slideUpAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(30px)', opacity: 0 }),
        animate('600ms 500ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
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
    this.setupKeyboardNavigation();
  }

  setupKeyboardNavigation(): void {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  handleKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowLeft':
        this.prevSlide();
        break;
      case 'ArrowRight':
        this.nextSlide();
        break;
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
    this.stopProgressAnimation();
    clearTimeout(this.interactionTimeout);
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
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

  // Parallax effect for mouse movement
  backgroundPosition = { x: 0, y: 0 };

  onMouseMove(event: MouseEvent): void {
    if (this.slides.length <= 0) return;

    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate position percentage (from center)
    const xPercent = (clientX - windowWidth / 2) / (windowWidth / 2) * 3;
    const yPercent = (clientY - windowHeight / 2) / (windowHeight / 2) * 3;

    // Update background position for parallax effect
    this.backgroundPosition = {
      x: xPercent,
      y: yPercent
    };
  }

  // Touch events for swipe functionality
  touchStartX: number = 0;
  touchEndX: number = 0;

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  handleSwipe(): void {
    const swipeThreshold = 50; // Minimum distance to be considered a swipe
    const swipeDistance = this.touchEndX - this.touchStartX;

    if (Math.abs(swipeDistance) < swipeThreshold) return;

    if (swipeDistance > 0) {
      // Swipe right - go to previous slide
      this.prevSlide();
    } else {
      // Swipe left - go to next slide
      this.nextSlide();
    }
  }
}