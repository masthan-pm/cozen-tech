import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {
  private isScrolling = false;

  constructor() {
    this.initSmoothScrolling();
  }

  private initSmoothScrolling() {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enhanced smooth scrolling with easing
    this.setupCustomScrolling();
  }

  private setupCustomScrolling() {
    let isScrolling = false;
    let scrollDirection = 0;
    let scrollVelocity = 0;

    window.addEventListener('wheel', (e) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      scrollDirection = delta > 0 ? 1 : -1;
      scrollVelocity = Math.abs(delta) * 0.5;
      
      if (!isScrolling) {
        isScrolling = true;
        this.smoothScroll(scrollDirection, scrollVelocity);
      }
    }, { passive: false });
  }

  private smoothScroll(direction: number, velocity: number) {
    const scrollAmount = direction * Math.min(velocity, 100);
    const currentScroll = window.pageYOffset;
    const targetScroll = currentScroll + scrollAmount;
    
    this.animateScroll(currentScroll, targetScroll, 300);
  }

  private animateScroll(start: number, end: number, duration: number) {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentPosition = start + (end - start) * easeOutCubic;
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isScrolling = false;
      }
    };
    
    requestAnimationFrame(animate);
  }

  scrollToElement(elementId: string, offset: number = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      this.animateScroll(window.pageYOffset, targetPosition, 800);
    }
  }

  scrollToTop() {
    this.animateScroll(window.pageYOffset, 0, 600);
  }
}