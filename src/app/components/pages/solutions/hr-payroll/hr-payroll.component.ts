import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { HR_PAYROLL_CONSTANTS } from '../../../../constants/solutions/hr-payroll.constants';
import { ProcessComponent } from '../../../shared/process/process.component';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { SolutionCTAComponent } from '../../../shared/solution-cta/solution-cta.component';

@Component({
  selector: 'app-hr-payroll',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ProcessComponent,
    HeroComponent,
    AssistanceComponent,
    FeaturesComponent,
    SolutionCTAComponent
  ],
  templateUrl: './hr-payroll.component.html',
  styleUrls: ['./hr-payroll.component.scss'],
})
export class HRPayrollComponent {
  hrPayroll = HR_PAYROLL_CONSTANTS.HERO;
  heroAction = HR_PAYROLL_CONSTANTS.HERO_ACTION;
  cta = HR_PAYROLL_CONSTANTS.CTA;
  features = HR_PAYROLL_CONSTANTS.FEATURES;
  assistance = HR_PAYROLL_CONSTANTS.ASSISTANCE;
  process = HR_PAYROLL_CONSTANTS.PROCESS;
  services = HR_PAYROLL_CONSTANTS.SERVICES;
  phases = HR_PAYROLL_CONSTANTS.PHASES;
  stepFeatures = HR_PAYROLL_CONSTANTS.STEP_FEATURES;
  featuresContent = HR_PAYROLL_CONSTANTS.FEATURES_CONTENT;
  floatingIcons = HR_PAYROLL_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = HR_PAYROLL_CONSTANTS.HERO_STATS;
}
