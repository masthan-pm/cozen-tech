import { Component, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

interface FloatingIcon {
  x: number;
  y: number;
  icon: string;
  delay: number;
}

interface HeroStat {
  icon: string;
  number: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, ScrollAnimationDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  @Input() backgroundImage: string = '';
  @Input() header: string = '';
  @Input() text: string = '';
  @Input() variant: 'default' | 'enhanced' = 'default';
  @Input() floatingIcons: FloatingIcon[] = [];
  @Input() heroStats: HeroStat[] = [];
  @Input() primaryColor: string = '#667eea';
  @Input() accentColor: string = '#4facfe';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.variant === 'default') {
      const heroSection = this.el.nativeElement.querySelector('.hero-section');
      if (heroSection) {
        this.renderer.setStyle(
          heroSection,
          'background-image',
          `url(${this.backgroundImage})`
        );
      }
    }
  }
}