import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface AnimatedIcon {
  icon: string;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
}

interface HeroStat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-animated-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animated-hero.component.html',
  styleUrls: ['./animated-hero.component.scss']
})
export class AnimatedHeroComponent implements OnInit, OnDestroy {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() primaryButtonText: string = 'Get Started';
  @Input() primaryButtonLink: string = '/contact';
  @Input() secondaryButtonText: string = 'Our Services';
  @Input() secondaryButtonLink: string = '#services';
  @Input() stats: HeroStat[] = [];
  @Input() animatedIcons: string[] = [];
  @Input() gradientColors: string[] = ['#667eea', '#764ba2', '#4facfe'];

  @ViewChild('heroContainer') heroContainer!: ElementRef;

  floatingIcons: AnimatedIcon[] = [];
  private animationId?: number;

  ngOnInit() {
    this.initializeFloatingIcons();
    this.startAnimation();
  }

  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initializeFloatingIcons() {
    const iconCount = Math.min(this.animatedIcons.length * 3, 15);
    
    for (let i = 0; i < iconCount; i++) {
      const iconIndex = i % this.animatedIcons.length;
      this.floatingIcons.push({
        icon: this.animatedIcons[iconIndex],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        speed: Math.random() * 0.5 + 0.2,
        direction: Math.random() * Math.PI * 2
      });
    }
  }

  private startAnimation() {
    const animate = () => {
      this.updateIconPositions();
      this.animationId = requestAnimationFrame(animate);
    };
    animate();
  }

  private updateIconPositions() {
    this.floatingIcons.forEach(icon => {
      icon.x += Math.cos(icon.direction) * icon.speed;
      icon.y += Math.sin(icon.direction) * icon.speed;

      // Bounce off edges
      if (icon.x <= 0 || icon.x >= 100) {
        icon.direction = Math.PI - icon.direction;
      }
      if (icon.y <= 0 || icon.y >= 100) {
        icon.direction = -icon.direction;
      }

      // Keep within bounds
      icon.x = Math.max(0, Math.min(100, icon.x));
      icon.y = Math.max(0, Math.min(100, icon.y));
    });
  }

  getGradientStyle() {
    return {
      background: `linear-gradient(135deg, ${this.gradientColors.join(', ')})`
    };
  }
}