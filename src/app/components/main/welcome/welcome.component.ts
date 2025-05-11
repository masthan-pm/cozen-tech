import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { ClientsComponent } from '../clients/clients.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { WELCOME_CONSTANT, CAROUSEL_SLIDES } from '../../../constants/home/welcome.constants';

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
  carouselSlides = CAROUSEL_SLIDES;
}