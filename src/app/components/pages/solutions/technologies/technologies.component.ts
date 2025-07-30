import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { TECHNOLOGIES_CONSTANTS } from '../../../../constants/solutions/technologies.constants';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    AssistanceComponent,
    FeaturesComponent,
  ],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  technologies = TECHNOLOGIES_CONSTANTS.HERO;
  heroAction = TECHNOLOGIES_CONSTANTS.HERO_ACTION;
  cta = TECHNOLOGIES_CONSTANTS.CTA;
  features = TECHNOLOGIES_CONSTANTS.FEATURES;
  assistance = TECHNOLOGIES_CONSTANTS.ASSISTANCE;
  services = TECHNOLOGIES_CONSTANTS.SERVICES;
  techStack = TECHNOLOGIES_CONSTANTS.TECH_STACK;
  featuresContent = TECHNOLOGIES_CONSTANTS.FEATURES_CONTENT;
  techStackSection = TECHNOLOGIES_CONSTANTS.TECH_STACK_SECTION;
  floatingIcons = TECHNOLOGIES_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = TECHNOLOGIES_CONSTANTS.HERO_STATS;
}
