import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  @Input() header: string = 'What Our Clients Say';
  @Input() content: string =
    "Don't just take our word for it - hear from some of our satisfied clients about their experience working with Cozen Tech.";
  testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      position: 'CTO, TechCorp',
      image: 'assets/shared/clients/testimonials/testimonial1.jpg',
      quote:
        'Cozen Tech has been instrumental in helping us build our engineering team. Their understanding of our technical requirements and company culture is exceptional.',
    },
    {
      name: 'Sarah Chen',
      position: 'HR Director, InnovateSoft',
      image: 'assets/shared/clients/testimonials/testimonial2.jpg',
      quote:
        'The quality of candidates and the speed of recruitment have exceeded our expectations. Their team is professional and thorough in their approach.',
    },
    {
      name: 'Michael Rodriguez',
      position: 'CEO, DataFlow',
      image: 'assets/shared/clients/testimonials/testimonial3.jpg',
      quote:
        'Working with Cozen Tech has transformed our hiring process. They understand our needs and consistently deliver top talent.',
    },
  ];

  // stars = new Array(5);
  stars = Array(5).fill(0);
}
