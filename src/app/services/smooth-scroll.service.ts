import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SmoothScrollService {

  constructor() {
    this.initSmoothScrolling();
  }

  private initSmoothScrolling() {
    // Add smooth scrolling behavior to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  scrollToElement(elementId: string, offset: number = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const targetPosition = element.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}