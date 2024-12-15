import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HeroContent,
  CTAContent,
} from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { ServicesComponent } from '../../main/services/services.component';

interface Solution {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-our-solutions',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ServicesComponent,
    CTAComponent,
  ],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class OurSolutionsComponent {
  solutionsHero: HeroContent = {
    header: 'Our Solutions',
    text: 'Comprehensive technology solutions tailored to drive your business forward',
    image: 'assets/shared/services/global.jpg',
  };

  cta: CTAContent = {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our solutions can help you achieve your business goals.",
  };
}
