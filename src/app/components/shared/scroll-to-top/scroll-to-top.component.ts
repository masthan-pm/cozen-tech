import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmoothScrollService } from '../../../services/smooth-scroll.service';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="scroll-to-top"
      [class.visible]="isVisible"
      (click)="scrollToTop()"
      aria-label="Scroll to top"
    >
      <i class="material-icons">keyboard_arrow_up</i>
    </button>
  `,
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit, OnDestroy {
  isVisible = false;
  private scrollListener!: () => void;

  constructor(private smoothScrollService: SmoothScrollService) {}

  ngOnInit() {
    this.scrollListener = () => {
      this.isVisible = window.pageYOffset > 300;
    };
    
    window.addEventListener('scroll', this.scrollListener);
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  scrollToTop() {
    this.smoothScrollService.scrollToTop();
  }
}