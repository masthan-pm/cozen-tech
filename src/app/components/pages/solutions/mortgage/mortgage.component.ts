import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
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
  ],
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss'],
})
export class MortgageComponent {
  mortgage = MORTGAGE_CONSTANTS.HERO;
  cta = MORTGAGE_CONSTANTS.CTA;
  assistance = MORTGAGE_CONSTANTS.ASSISTANCE;
  process = MORTGAGE_CONSTANTS.PROCESS;
  features = MORTGAGE_CONSTANTS.FEATURES;
  services = MORTGAGE_CONSTANTS.SERVICES;
  phases = MORTGAGE_CONSTANTS.PHASES;
  featuresContent = MORTGAGE_CONSTANTS.FEATURES_CONTENT;
}
