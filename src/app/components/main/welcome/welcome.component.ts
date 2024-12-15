import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { ClientsComponent } from '../clients/clients.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { CTAComponent } from '../../shared/cta/cta.component';

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
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  welcome = {
    title: {
      main: 'Empowering Businesses with',
      sub: 'Cutting-Edge IT Solutions',
    },
    content:
      ' Partner with us to transform your business through innovative technology solutions and exceptional talent acquisition services.',
    explore: 'Explore Our Solutions',
    contact: 'Contact Us',
  };

  about = {
    header: 'About Our Company',
    content: {
      p1: 'Cozen Technology Solutions is a leading provider of IT services and talent solutions, helping businesses navigate the digital landscape since 2010. We combine technical expertise with deep industry knowledge to deliver innovative solutions that drive business growth and success.',
      p2: 'Our team of experts specializes in connecting top talent with innovative companies, providing end-to-end technology solutions, and ensuring seamless digital transformation.',
    },
    linkText: 'Read More',
    image: '/assets/pages/home/about-company.jpg',
  };

  cta = {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how we can help you achieve your business goals through our IT solutions and talent acquisition services.",
    buttonText: 'Get in Touch',
  };
}
