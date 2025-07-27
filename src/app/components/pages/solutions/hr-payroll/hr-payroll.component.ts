import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';
import { HR_PAYROLL_CONSTANTS } from '../../../../constants/solutions/hr-payroll.constants';
import { ProcessComponent } from '../../../shared/process/process.component';
import { HeroComponent } from '../../../shared/hero/hero.component';

@Component({
  selector: 'app-hr-payroll',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective,
    ProcessComponent,
    HeroComponent
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

  hoveredService: number | null = null;
  selectedService: number | null = null;
  highlightedStep: number = -1;
  activeFeatureCategory: number = 0;

  // Hero section data
  employeeIcons = [
    { x: 15, y: 20, icon: 'person' },
    { x: 35, y: 15, icon: 'person' },
    { x: 55, y: 25, icon: 'person' },
    { x: 75, y: 18, icon: 'person' },
    { x: 25, y: 45, icon: 'person' },
    { x: 65, y: 40, icon: 'person' },
    { x: 85, y: 50, icon: 'person' },
    { x: 45, y: 70, icon: 'person' },
    { x: 25, y: 75, icon: 'person' },
    { x: 75, y: 65, icon: 'person' }
  ];

  connectionPaths = [
    { path: 'M15,20 Q35,15 55,25', delay: 0 },
    { path: 'M55,25 Q75,18 85,50', delay: 0.5 },
    { path: 'M25,45 Q65,40 85,50', delay: 1 },
    { path: 'M45,70 Q25,75 75,65', delay: 1.5 }
  ];

  dataStreams = [
    { x: 10, y: 30, bits: ['$', '€', '£'] },
    { x: 70, y: 35, bits: ['01', '10', '11'] },
    { x: 40, y: 60, bits: ['HR', 'PR', 'BN'] },
    { x: 80, y: 25, bits: ['✓', '✗', '?'] }
  ];

  hrChartData = [60, 80, 45, 90, 70, 85];
  speedMarks = Array(5).fill(0);

  // HR Network for CTA
  hrNetworkNodes = [
    { x: 20, y: 25, icon: 'person' },
    { x: 50, y: 20, icon: 'groups' },
    { x: 80, y: 30, icon: 'business' },
    { x: 30, y: 60, icon: 'attach_money' },
    { x: 70, y: 65, icon: 'schedule' }
  ];

  hrConnections = [
    { path: 'M20,25 Q50,20 80,30', delay: 0 },
    { path: 'M50,20 Q30,60 70,65', delay: 1 },
    { path: 'M80,30 Q70,65 30,60', delay: 2 }
  ];

  // CTA benefits
  ctaBenefits = [
    {
      icon: 'speed',
      title: 'Faster Processing',
      description: 'Reduce payroll processing time by 75%'
    },
    {
      icon: 'security',
      title: 'Enhanced Security',
      description: 'Bank-level security for sensitive data'
    },
    {
      icon: 'analytics',
      title: 'Real-time Analytics',
      description: 'Instant insights into HR metrics'
    }
  ];

  onServiceHover(index: number, isHovered: boolean): void {
    this.hoveredService = isHovered ? index : null;
  }

  selectService(index: number): void {
    this.selectedService = this.selectedService === index ? null : index;
  }

  highlightWorkflowStep(index: number): void {
    this.highlightedStep = index;
  }

  selectFeatureCategory(index: number): void {
    this.activeFeatureCategory = index;
  }

  getServiceMetric(index: number): { value: string; label: string } {
    const metrics = [
      { value: '99.9%', label: 'Accuracy' },
      { value: '24/7', label: 'Support' },
      { value: '100%', label: 'Compliant' },
      { value: '50%', label: 'Time Saved' },
      { value: '95%', label: 'Satisfaction' },
      { value: '10K+', label: 'Employees' }
    ];
    return metrics[index] || { value: '100%', label: 'Quality' };
  }

  getServiceFeatures(index: number): string[] {
    const features = [
      ['Automated Calculations', 'Tax Compliance', 'Direct Deposit', 'Reporting'],
      ['Employee Self-Service', 'Benefits Enrollment', 'Document Management', 'Onboarding'],
      ['Regulatory Updates', 'Audit Trails', 'Risk Management', 'Policy Updates'],
      ['Health Insurance', 'Retirement Plans', 'Flexible Benefits', 'Wellness Programs'],
      ['Clock In/Out', 'Overtime Tracking', 'Leave Management', 'Scheduling'],
      ['Goal Setting', 'Reviews', 'Feedback', 'Development Plans']
    ];
    return features[index] || [];
  }

  getPhaseIcon(index: number): string {
    const icons = ['description', 'settings', 'verified', 'send'];
    return icons[index] || 'work';
  }

  getStepProgress(index: number): number {
    const progress = [25, 50, 75, 100];
    return progress[index] || 0;
  }

  getStepDuration(index: number): string {
    const durations = ['1-2 days', '3-5 days', '2-3 days', '1 day'];
    return durations[index] || '1 day';
  }

  getStepTools(index: number): Array<{ icon: string; name: string }> {
    const tools = [
      [{ icon: 'description', name: 'Forms' }, { icon: 'analytics', name: 'Analysis' }],
      [{ icon: 'settings', name: 'Setup' }, { icon: 'integration_instructions', name: 'Integration' }],
      [{ icon: 'verified', name: 'Testing' }, { icon: 'security', name: 'Security' }],
      [{ icon: 'send', name: 'Deploy' }, { icon: 'support', name: 'Support' }]
    ];
    return tools[index] || [];
  }

  getFeatureCategoryIcon(index: number): string {
    const icons = ['attach_money', 'group', 'favorite', 'description'];
    return icons[index] || 'star';
  }

  getFeatureCategoryProgress(index: number): number {
    const progress = [95, 88, 92, 85];
    return progress[index] || 90;
  }

  getFeatureItemIcon(categoryIndex: number, itemIndex: number): string {
    const icons = [
      ['calculate', 'account_balance', 'receipt', 'trending_up'],
      ['person_add', 'folder', 'assignment', 'school'],
      ['favorite', 'fitness_center', 'local_hospital', 'psychology'],
      ['description', 'bar_chart', 'security', 'folder_shared']
    ];
    return icons[categoryIndex]?.[itemIndex] || 'check_circle';
  }

  getFeatureItemDescription(categoryIndex: number, itemIndex: number): string {
    const descriptions = [
      ['Automated salary calculations', 'Secure payment processing', 'Digital pay stubs', 'Financial reporting'],
      ['Streamlined onboarding', 'Centralized document storage', 'Task management', 'Training programs'],
      ['Health and wellness tracking', 'Fitness program management', 'Medical benefits', 'Mental health support'],
      ['Regulatory compliance', 'Performance analytics', 'Data protection', 'Audit documentation']
    ];
    return descriptions[categoryIndex]?.[itemIndex] || 'Feature description';
  }
}
