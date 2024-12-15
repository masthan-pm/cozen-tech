import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  Client,
  Testimonial,
  SuccessStory,
  HeroContent,
} from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ClientsComponent } from '../../main/clients/clients.component';
import { CTAComponent } from '../../shared/cta/cta.component';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ClientsComponent,
    CTAComponent,
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsPageComponent {
  clientsHero: HeroContent = {
    header: 'Trusted by Industry Leaders',
    text: 'We work with companies of all sizes, from startups to enterprises, helping them build exceptional teams.',
    image: '/assets/pages/clients/client.jpg',
  };

  cta = {
    header: 'Ready to Join Our Success Stories?',
    text: "Let's discuss how we can help you achieve your business goals through our IT solutions and talent acquisition services.",
    buttonText: 'Get Started Today',
  };

  clients: Client[] = [
    {
      name: 'ASP.NET',
      logo: 'assets/shared/clients/trusted/dedicated/asp.jpg',
    },
    {
      name: 'Entity Framework',
      logo: 'assets/shared/clients/trusted/dedicated/entity.jpg',
    },
    {
      name: 'Flutter',
      logo: 'assets/shared/clients/trusted/dedicated/flutter.jpg',
    },
    {
      name: 'Net',
      logo: 'assets/shared/clients/trusted/dedicated/net.jpg',
    },
    {
      name: 'NHibernate',
      logo: 'assets/shared/clients/trusted/dedicated/nhibernate.jpg',
    },
    {
      name: 'TechCorp',
      logo: 'assets/shared/clients/trusted/dedicated/tech_corp.jpg',
    },
  ];

  testimonials: Testimonial[] = [
    {
      name: 'John Smith',
      position: 'CTO, TechCorp',
      image: 'assets/shared/clients/testimonials/testimonial3.jpg',
      quote:
        'Cozen Tech has been instrumental in helping us build our engineering team. Their understanding of our technical requirements and company culture is exceptional.',
      rating: 5,
    },
    {
      name: 'Sarah Chen',
      position: 'HR Director, InnovateSoft',
      image: 'assets/shared/clients/testimonials/testimonial2.jpg',
      quote:
        'The quality of candidates and the speed of recruitment have exceeded our expectations. Their team is professional and thorough in their approach.',
      rating: 5,
    },
    {
      name: 'Michael Rodriguez',
      position: 'CEO, DataFlow',
      image: 'assets/shared/clients/testimonials/testimonial1.jpg',
      quote:
        'Working with Cozen Tech has transformed our hiring process. They understand our needs and consistently deliver top talent.',
      rating: 5,
    },
  ];

  successStories: SuccessStory[] = [
    {
      client: 'TechCorp',
      title: 'Building a World-Class Engineering Team',
      image: 'assets/pages/clients/stories/story1.jpg',
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
      image: 'assets/pages/clients/stories/story2.jpg',
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
      image: 'assets/pages/clients/stories/story3.jpg',
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
