import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyOverviewComponent } from '../company-overview/company-overview.component';
import { ServicesComponent } from '../services/services.component';
import { SolutionsComponent } from '../solutions/solutions.component';
import { ClientsComponent } from '../clients/clients.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

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
    SolutionsComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
