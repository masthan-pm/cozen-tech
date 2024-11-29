import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Client {
  name: string;
  logo: string;
}

interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
}

interface SuccessStory {
  client: string;
  title: string;
  image: string;
  description: string;
  results: string[];
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients: Client[] = [
    { name: 'TechCorp', logo: 'assets/sql.jpg' },
    { name: 'InnovateSoft', logo: 'assets/nhibernate.jpg' },
    { name: 'DataFlow', logo: 'assets/redis.jpg' },
    { name: 'CloudNet', logo: 'assets/flutter.jpg' },
    { name: 'SecureIT', logo: 'assets/iso.jpg' },
    { name: 'DevPro', logo: 'assets/net.jpg' },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      position: 'CTO, TechCorp',
      image: 'assets/testimonial3.png',
      quote:
        'Cozen Tech has been instrumental in helping us build our engineering team. Their understanding of our technical requirements and company culture is exceptional.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      position: 'HR Director, InnovateSoft',
      image: 'assets/testimonial2.png',
      quote:
        'The quality of candidates and the speed of recruitment have exceeded our expectations. Their team is professional and thorough in their approach.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      position: 'CEO, DataFlow',
      image: 'assets/testimonial1.png',
      quote:
        'Working with Cozen Tech has transformed our hiring process. They understand our needs and consistently deliver top talent.',
      rating: 5,
    },
  ];

  successStories: SuccessStory[] = [
    {
      client: 'TechCorp',
      title: 'Building a World-Class Engineering Team',
      image: 'assets/staffing.png',
      description:
        'How we helped TechCorp scale their engineering team from 10 to 50 members in just 6 months.',
      results: [
        '50+ successful placements',
        '30% reduction in hiring time',
        '95% retention rate',
      ],
    },
    {
      client: 'InnovateSoft',
      title: 'Digital Transformation Success',
      image: 'assets/Mortgage.png',
      description:
        "Supporting InnovateSoft's digital transformation journey with key technical talent.",
      results: [
        '40% increase in productivity',
        '25% cost savings',
        'Successful cloud migration',
      ],
    },
    {
      client: 'DataFlow',
      title: 'Rapid Team Expansion',
      image: 'assets/master.png',
      description:
        'Helping DataFlow rapidly scale their development team for a major product launch.',
      results: [
        '20+ developers hired',
        '2 weeks average time-to-hire',
        '100% project deadline met',
      ],
    },
  ];

  stars = Array(5).fill(0);
}
