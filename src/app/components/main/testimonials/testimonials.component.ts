import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  @Input() header: string = TESTIMONIAL_CONST.HEADER;
  @Input() content: string = TESTIMONIAL_CONST.CONTENT;
  testimonials: Testimonial[] = TESTIMONIAL_CONST.TESTIMONIALS;

  // stars = new Array(5);
  stars = Array(5).fill(0);
}
