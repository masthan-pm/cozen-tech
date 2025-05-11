import { Component, OnInit, OnDestroy, Input, ElementRef, ViewChild, NgZone, ViewChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { interval, Subscription } from 'rxjs';
import { CarouselSlide } from '../../../constants/home/welcome.constants';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
export class HeroCarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() slides: CarouselSlide[] = [];
  @Input() autoplayInterval: number = 5000; // milliseconds
  @Input() showIndicators: boolean = true;
  @Input() showArrows: boolean = true;
  @Input() showProgressBar: boolean = true;

  @ViewChildren('progressBars') progressBarRefs!: QueryList<ElementRef>;

  currentSlideIndex: number = 0;
  private autoplaySubscription?: Subscription;
  private interactionTimeout: any;
  isUserInteracting: boolean = false;
  private animationFrameId?: number;
  private progressStartTime: number = 0;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.setupKeyboardNavigation();
  }

  ngAfterViewInit(): void {
    // Start autoplay and progress bar animation after view initialization
    setTimeout(() => {
      this.resetAllProgressBars();
      this.startProgressBarAnimation();
      this.startAutoplay();
    }, 100);
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
        this.ngZone.run(() => {
          this.nextSlide();
        });
      }
    });
  }

  stopAutoplay(): void {
    if (this.autoplaySubscription) {
      this.autoplaySubscription.unsubscribe();
    }
  }

  resetAllProgressBars(): void {
    if (!this.showProgressBar || this.slides.length <= 1) return;

    const progressBars = this.progressBarRefs?.toArray() || [];
    progressBars.forEach((bar, index) => {
      // Remove transition temporarily for immediate reset
      bar.nativeElement.style.transition = 'none';
      bar.nativeElement.style.width = '0%';

      // Force reflow to apply the immediate change
      void bar.nativeElement.offsetWidth;
    });

    // Restore the transition for the current slide's progress bar
    if (progressBars[this.currentSlideIndex]) {
      progressBars[this.currentSlideIndex].nativeElement.style.transition = `width ${this.autoplayInterval}ms linear`;
    }
  }

  startProgressBarAnimation(): void {
    if (!this.showProgressBar || this.slides.length <= 1) return;

    // Stop any existing animation
    this.stopProgressAnimation();

    // Reset all progress bars first
    this.resetAllProgressBars();

    // Get the progress bar element for the current slide
    const progressBars = this.progressBarRefs?.toArray() || [];
    const currentProgressBar = progressBars[this.currentSlideIndex];

    if (currentProgressBar) {
      // Record start time for animation
      this.progressStartTime = performance.now();

      // Set transition and start animation for current progress bar
      currentProgressBar.nativeElement.style.transition = `width ${this.autoplayInterval}ms linear`;

      // Run outside Angular zone for better performance
      this.ngZone.runOutsideAngular(() => {
        // Start smooth animation to 100%
        setTimeout(() => {
          if (currentProgressBar && currentProgressBar.nativeElement) {
            currentProgressBar.nativeElement.style.width = '100%';
          }
        }, 20);

        // Also start frame-based monitoring to ensure animation continues
        this.animationFrameId = requestAnimationFrame(() => this.monitorProgressBarAnimation());
      });
    }
  }

  monitorProgressBarAnimation(): void {
    if (this.isUserInteracting) {
      this.animationFrameId = requestAnimationFrame(() => this.monitorProgressBarAnimation());
      return;
    }

    const elapsed = performance.now() - this.progressStartTime;
    const progress = Math.min(100, (elapsed / this.autoplayInterval) * 100);

    // Get the current progress bar
    const progressBars = this.progressBarRefs?.toArray() || [];
    const currentProgressBar = progressBars[this.currentSlideIndex];

    // Update progress in case CSS transition is interrupted
    if (currentProgressBar && currentProgressBar.nativeElement) {
      // Only update if not already at 100% (avoid unnecessary DOM operations)
      if (parseFloat(currentProgressBar.nativeElement.style.width) < 100) {
        currentProgressBar.nativeElement.style.width = `${progress}%`;
      }
    }

    // Continue animation loop
    this.animationFrameId = requestAnimationFrame(() => this.monitorProgressBarAnimation());
  }

  stopProgressAnimation(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
  }

  nextSlide(): void {
    this.stopProgressAnimation();
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.startProgressBarAnimation();
    this.handleUserInteraction();
  }

  prevSlide(): void {
    this.stopProgressAnimation();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    this.startProgressBarAnimation();
    this.handleUserInteraction();
  }

  goToSlide(index: number): void {
    if (index !== this.currentSlideIndex) {
      this.stopProgressAnimation();
      this.currentSlideIndex = index;
      this.startProgressBarAnimation();
      this.handleUserInteraction();
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