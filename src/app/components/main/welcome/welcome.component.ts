import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { ClientsComponent } from '../clients/clients.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { WELCOME_CONSTANT, CAROUSEL_SLIDES } from '../../../constants/home/welcome.constants';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';

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
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  welcome = WELCOME_CONSTANT.WELCOME;
  about = WELCOME_CONSTANT.ABOUT;
  key_highlights = WELCOME_CONSTANT.KEY_HIGHLIGHTS;
  cta = WELCOME_CONSTANT.CTA;
  carouselSlides = CAROUSEL_SLIDES;
}