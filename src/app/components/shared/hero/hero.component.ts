import { Component, ElementRef, Input, Renderer2, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { FloatingIcon, HeroStat, HeroAction } from '../interfaces/solutions.interface';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, ScrollAnimationDirective, StaggerAnimationDirective],
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
  @Input() heroAction?: HeroAction;

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