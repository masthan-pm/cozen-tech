import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { FINANCE_CONSTANTS } from '../../../../constants/solutions/finance.constants';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    AssistanceComponent,
    FeaturesComponent,
  ],
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent {
  finance = FINANCE_CONSTANTS.HERO;
  benefitsHeading = FINANCE_CONSTANTS.HEADER;
  cta = FINANCE_CONSTANTS.CTA;
  features = FINANCE_CONSTANTS.FEATURES;
  assistance = FINANCE_CONSTANTS.ASSISTANCE;
  services = FINANCE_CONSTANTS.SERVICES;
  benefits = FINANCE_CONSTANTS.BENEFITS;
  expertise = FINANCE_CONSTANTS.EXPERTISE;
}
