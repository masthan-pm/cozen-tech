import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { HR_PAYROLL_CONSTANTS } from '../../../../constants/solutions/hr-payroll.constants';
import { ProcessComponent } from '../../../shared/process/process.component';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';

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
    FeaturesComponent
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

  // HR Network for CTA
  hrNetworkNodes = [
    { x: 20, y: 25, icon: 'person' },
    { x: 50, y: 20, icon: 'groups' },
    { x: 80, y: 30, icon: 'business' },
    { x: 30, y: 60, icon: 'attach_money' },
    { x: 70, y: 65, icon: 'schedule' },
  ];

  hrConnections = [
    { path: 'M20,25 Q50,20 80,30', delay: 0 },
    { path: 'M50,20 Q30,60 70,65', delay: 1 },
    { path: 'M80,30 Q70,65 30,60', delay: 2 },
  ];

  // CTA benefits
  ctaBenefits = [
    {
      icon: 'speed',
      title: 'Faster Processing',
      description: 'Reduce payroll processing time by 75%',
    },
    {
      icon: 'security',
      title: 'Enhanced Security',
      description: 'Bank-level security for sensitive data',
    },
    {
      icon: 'analytics',
      title: 'Real-time Analytics',
      description: 'Instant insights into HR metrics',
    },
  ];
}
