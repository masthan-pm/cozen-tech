import { Component } from '@angular/core';
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
  testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      position: 'CTO, TechCorp',
      image: 'assets/testimonial1.png',
      quote:
        'Cozen Tech has been instrumental in helping us build our engineering team. Their understanding of our technical requirements and company culture is exceptional.',
    },
    {
      name: 'Sarah Chen',
      position: 'HR Director, InnovateSoft',
      image: 'assets/testimonial2.png',
      quote:
        'The quality of candidates and the speed of recruitment have exceeded our expectations. Their team is professional and thorough in their approach.',
    },
    {
      name: 'Michael Rodriguez',
      position: 'CEO, DataFlow',
      image: 'assets/testimonial3.png',
      quote:
        'Working with Cozen Tech has transformed our hiring process. They understand our needs and consistently deliver top talent.',
    },
  ];

  stars = new Array(5);
}
