import { Component, Input, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

interface NeuralParticle {
  id: number;
  x: number;
  y: number;
  animationDelay: number;
  animationDuration: number;
}

@Component({
  selector: 'app-solution-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './solution-cta.component.html',
  styleUrls: ['./solution-cta.component.scss'],
})
export class SolutionCTAComponent implements OnInit, OnDestroy {
  @ViewChild('neuralParticlesContainer', { static: false }) neuralParticlesContainer!: ElementRef;

  @Input() header: string = 'Ready to Transform Your Business?';
  @Input() text: string = "Let's discuss how our solutions can help you achieve your business goals and drive innovation with cutting-edge technology.";
  @Input() buttonText: string = 'Get Started Today';
  @Input() buttonIcon: string = 'rocket_launch';
  @Input() centralIcon: string = 'business_center';
  @Input() badgeIcon: string = 'star';
  @Input() badgeText: string = 'Get Started';

  // Floating icons around the central visual
  @Input() floatingIcons: string[] = [
    'code',
    'cloud',
    'security',
    'analytics',
    'integration_instructions',
    'settings'
  ];

  // Neural network particles
  neuralParticles: NeuralParticle[] = [];

  private animationFrameId: number = 0;
  private isDestroyed: boolean = false;

  ngOnInit(): void {
    this.generateNeuralParticles();
    this.startParticleAnimation();
  }

  ngOnDestroy(): void {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  private generateNeuralParticles(): void {
    const particleCount = 20;
    this.neuralParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDelay: Math.random() * 8,
      animationDuration: 8 + Math.random() * 4
    }));
  }

  private startParticleAnimation(): void {
    if (this.isDestroyed) return;

    // Update particle positions periodically for dynamic effect
    setTimeout(() => {
      this.updateParticlePositions();
      this.startParticleAnimation();
    }, 10000); // Update every 10 seconds
  }

  private updateParticlePositions(): void {
    this.neuralParticles = this.neuralParticles.map(particle => ({
      ...particle,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDelay: Math.random() * 8
    }));
  }

  onFloatingElementHover(event: MouseEvent, isEntering: boolean): void {
    const element = event.target as HTMLElement;
    if (isEntering) {
      element.style.transform += ' scale(1.2)';
      element.style.background = 'rgba(79, 172, 254, 0.2)';
      element.style.borderColor = 'rgba(79, 172, 254, 0.5)';
    } else {
      element.style.transform = element.style.transform.replace(' scale(1.2)', '');
      element.style.background = 'rgba(255, 255, 255, 0.05)';
      element.style.borderColor = 'rgba(79, 172, 254, 0.3)';
    }
  }

  getParticleStyle(particle: NeuralParticle) {
    return {
      'left.%': particle.x,
      'top.%': particle.y,
      'animation-delay.s': particle.animationDelay,
      'animation-duration.s': particle.animationDuration
    };
  }

  trackByParticleId(index: number, particle: NeuralParticle): number {
    return particle.id;
  }

  trackByIconIndex(index: number, icon: string): number {
    return index;
  }
}