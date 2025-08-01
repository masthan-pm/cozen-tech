import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { SolutionCTAComponent } from '../../../shared/solution-cta/solution-cta.component';
import { MORTGAGE_CONSTANTS } from '../../../../constants/solutions/mortgage.constants';

@Component({
  selector: 'app-mortgage',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    ProcessComponent,
    AssistanceComponent,
    FeaturesComponent,
    SolutionCTAComponent,
  ],
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss'],
})
export class MortgageComponent {
  mortgage = MORTGAGE_CONSTANTS.HERO;
  heroAction = MORTGAGE_CONSTANTS.HERO_ACTION;
  cta = MORTGAGE_CONSTANTS.CTA;
  assistance = MORTGAGE_CONSTANTS.ASSISTANCE;
  process = MORTGAGE_CONSTANTS.PROCESS;
  features = MORTGAGE_CONSTANTS.FEATURES;
  services = MORTGAGE_CONSTANTS.SERVICES;
  phases = MORTGAGE_CONSTANTS.PHASES;
  stepFeatures = MORTGAGE_CONSTANTS.STEP_FEATURES;
  featuresContent = MORTGAGE_CONSTANTS.FEATURES_CONTENT;
  floatingIcons = MORTGAGE_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = MORTGAGE_CONSTANTS.HERO_STATS;
}
