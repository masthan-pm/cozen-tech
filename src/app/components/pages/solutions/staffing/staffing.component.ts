import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';
import { STAFFING_CONSTANTS } from '../../../../constants/solutions/staffing.constants';
import { ProcessComponent } from '../../../shared/process/process.component';

@Component({
  selector: 'app-staffing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective,
    ProcessComponent
  ],
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss'],
})
export class StaffingComponent {
  staffing = STAFFING_CONSTANTS.HERO;
  cta = STAFFING_CONSTANTS.CTA;
  assistance = STAFFING_CONSTANTS.ASSISTANCE;
  process = STAFFING_CONSTANTS.PROCESS;
  services = STAFFING_CONSTANTS.SERVICES;
  phases = STAFFING_CONSTANTS.PHASES;
  stepFeatures = STAFFING_CONSTANTS.STEP_FEATURES;
  specializations = STAFFING_CONSTANTS.SPECIALIZATIONS;
  specializationsSection = STAFFING_CONSTANTS.SPECIALIZATIONS_SECTION;

  selectedService: number | null = null;
  highlightedStep: number = -1;
  hoveredSpecialization: number | null = null;

  // Network animation data
  networkNodes = [
    { x: 10, y: 20 }, { x: 30, y: 15 }, { x: 50, y: 25 }, { x: 70, y: 18 },
    { x: 90, y: 22 }, { x: 15, y: 45 }, { x: 35, y: 40 }, { x: 55, y: 50 },
    { x: 75, y: 42 }, { x: 85, y: 48 }, { x: 20, y: 70 }, { x: 40, y: 75 },
    { x: 60, y: 65 }, { x: 80, y: 72 }
  ];

  networkConnections = [
    { path: 'M10,20 Q30,15 50,25', delay: 0 },
    { path: 'M50,25 Q70,18 90,22', delay: 0.5 },
    { path: 'M15,45 Q35,40 55,50', delay: 1 },
    { path: 'M55,50 Q75,42 85,48', delay: 1.5 },
    { path: 'M20,70 Q40,75 60,65', delay: 2 },
    { path: 'M60,65 Q80,72 90,22', delay: 2.5 }
  ];

  // Talent dots for CTA background
  talentDots = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  selectService(index: number): void {
    this.selectedService = this.selectedService === index ? null : index;
  }

  highlightStep(index: number): void {
    this.highlightedStep = index;
  }

  onSpecializationHover(index: number, isHovered: boolean): void {
    this.hoveredSpecialization = isHovered ? index : null;
  }

  getServiceCategory(index: number): string {
    const categories = ['Sourcing', 'Assessment', 'Placement', 'Contract', 'Augmentation', 'Executive'];
    return categories[index] || 'Service';
  }

  getServiceStat(index: number): { number: string; label: string } {
    const stats = [
      { number: '500+', label: 'Candidates' },
      { number: '95%', label: 'Success Rate' },
      { number: '1000+', label: 'Placements' },
      { number: '14', label: 'Days Avg' },
      { number: '200+', label: 'Teams Built' },
      { number: '50+', label: 'Executives' }
    ];
    return stats[index] || { number: '100+', label: 'Results' };
  }

  getStepFeatures(index: number): string[] {
    const features = [
      ['Requirement Analysis', 'Culture Assessment', 'Role Definition'],
      ['Talent Pool Access', 'Active Sourcing', 'Referral Network'],
      ['Technical Screening', 'Cultural Fit', 'Reference Checks'],
      ['Offer Negotiation', 'Onboarding Support', 'Follow-up']
    ];
    return features[index] || [];
  }

  getStepProgress(index: number): number {
    const progress = [25, 50, 75, 100];
    return progress[index] || 0;
  }

  getSpecializationIcon(index: number): string {
    const icons = [
      'code', 'cloud', 'analytics', 'security',
      'inventory', 'palette', 'bug_report', 'engineering'
    ];
    return icons[index] || 'work';
  }

  getSpecializationDemand(index: number): number {
    const demands = [95, 88, 92, 85, 78, 82, 75, 90];
    return demands[index] || 80;
  }
}
