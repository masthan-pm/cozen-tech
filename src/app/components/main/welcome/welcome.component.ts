import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyOverviewComponent } from '../company-overview/company-overview.component';
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
    CompanyOverviewComponent,
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
  cta = {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how we can help you achieve your business goals through our IT solutions and talent acquisition services.",
    buttonText: 'Get in Touch',
  };
}
