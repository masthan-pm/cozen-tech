import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { MagneticHoverDirective } from '../../../directives/magnetic-hover.directive';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';
import { TESTIMONIAL_CONST } from '../../../constants/home/testimonials.constants';

interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ScrollRevealDirective, MagneticHoverDirective, StaggerAnimationDirective],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  @Input() header: string = TESTIMONIAL_CONST.HEADER;
  @Input() content: string = TESTIMONIAL_CONST.CONTENT;
  testimonials: Testimonial[] = TESTIMONIAL_CONST.TESTIMONIALS;

  stars = Array(5).fill(0);
}