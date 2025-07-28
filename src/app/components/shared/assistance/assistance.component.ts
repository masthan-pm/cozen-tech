import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';
import { Service } from '../interfaces/solutions.interface';

@Component({
  selector: 'app-assistance',
  standalone: true,
  imports: [
    CommonModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective
  ],
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.scss']
})
export class AssistanceComponent {
  @Input() header: string = 'Our Services';
  @Input() subheader: string = 'We offer a wide range of technology solutions to help businesses thrive in the digital age.';
  @Input() services: Service[] = [];
  @Input() badgeIcon: string = 'build';
  @Input() badgeText: string = 'Our Services';

  hoveredService: number | null = null;

  onServiceHover(index: number, isHovered: boolean): void {
    this.hoveredService = isHovered ? index : null;
  }
}