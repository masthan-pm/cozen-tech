import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-solution-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './solution-cta.component.html',
  styleUrls: ['./solution-cta.component.scss'],
})
export class SolutionCTAComponent {
  @Input() header: string = 'Ready to Transform Your Business?';
  @Input() text: string = "Let's discuss how our solutions can help you achieve your business goals and drive innovation.";
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

  // Background particles with tech icons
  particles = Array.from({ length: 15 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    icon: this.getRandomIcon()
  }));

  private getRandomIcon(): string {
    const icons = [
      'code', 'cloud', 'security', 'analytics', 'integration_instructions',
      'settings', 'devices', 'language', 'storage', 'speed'
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  }
}