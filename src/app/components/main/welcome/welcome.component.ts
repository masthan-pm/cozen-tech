import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { ClientsComponent } from '../clients/clients.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { WELCOME_CONSTANT } from '../../../constants/home/welcome.constants';
import { CarouselSlide, HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ServicesComponent,
    ClientsComponent,
    TestimonialsComponent,
    CTAComponent,
    HeroCarouselComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  welcome = WELCOME_CONSTANT.WELCOME;
  about = WELCOME_CONSTANT.ABOUT;
  cta = WELCOME_CONSTANT.CTA;

  // Define carousel slides
  carouselSlides: CarouselSlide[] = [
    {
      backgroundImage: '/assets/pages/home/hero.jpg',
      title: this.welcome.title.main,
      subtitle: this.welcome.title.sub,
      description: this.welcome.content
    },
    {
      backgroundImage: '/assets/pages/home/about-company.jpg',
      title: 'Innovative Solutions',
      subtitle: 'For Modern Business',
      description: 'Deploy cutting-edge technology to transform your operations and drive exceptional business outcomes.'
    },
    {
      backgroundImage: '/assets/pages/home/hero.jpg',
      title: 'Expert Consultation',
      subtitle: 'Strategic Partnership',
      description: 'Our team of industry experts works alongside you to understand your unique challenges and implement effective solutions.'
    }
  ];
}