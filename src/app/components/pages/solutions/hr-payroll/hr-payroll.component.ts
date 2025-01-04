import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { HR_PAYROLL_CONSTANTS } from '../../../../constants/solutions/hr-payroll.constants';

@Component({
  selector: 'app-hr-payroll',
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
  templateUrl: './hr-payroll.component.html',
  styleUrls: ['./hr-payroll.component.scss'],
})
export class HRPayrollComponent {
  hrPayroll = HR_PAYROLL_CONSTANTS.HERO;
  cta = HR_PAYROLL_CONSTANTS.CTA;
  features = HR_PAYROLL_CONSTANTS.FEATURES;
  assistance = HR_PAYROLL_CONSTANTS.ASSISTANCE;
  process = HR_PAYROLL_CONSTANTS.PROCESS;
  services = HR_PAYROLL_CONSTANTS.SERVICES;
  phases = HR_PAYROLL_CONSTANTS.PHASES;
  featuresContent = HR_PAYROLL_CONSTANTS.FEATURES_CONTENT;
}
