import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ClientsComponent } from '../../main/clients/clients.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { TestimonialsComponent } from '../../main/testimonials/testimonials.component';
import { CLIENTS_CONSTANTS } from '../../../constants/clients.constants';

@Component({
  selector: 'app-clients-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ClientsComponent,
    CTAComponent,
    TestimonialsComponent,
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsPageComponent {
  clientsHero = CLIENTS_CONSTANTS.HERO;
  header = CLIENTS_CONSTANTS.HEADER;
  trustedBy = CLIENTS_CONSTANTS.TRUSTED_BY;
  testimonials = CLIENTS_CONSTANTS.TESTIMONIALS;
  cta = CLIENTS_CONSTANTS.CTA;
  readMore = CLIENTS_CONSTANTS.READMORE;
  successStories = CLIENTS_CONSTANTS.SUCCESS_STORIES;
}
