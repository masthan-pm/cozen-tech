import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="scroll-progress" [style.--scroll-progress]="scrollProgress + '%'"></div>
  `,
  styleUrls: ['./scroll-progress.component.scss']
})
export class ScrollProgressComponent implements OnInit, OnDestroy {
  scrollProgress = 0;
  private scrollListener!: () => void;

  ngOnInit() {
    this.scrollListener = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      this.scrollProgress = (scrollTop / docHeight) * 100;
    };

    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy() {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }
}