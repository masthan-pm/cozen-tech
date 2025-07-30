import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

import { STAFFING_CONSTANTS } from '../../../../constants/solutions/staffing.constants';
import { ProcessComponent } from '../../../shared/process/process.component';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';

@Component({
  selector: 'app-staffing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    ProcessComponent,
    HeroComponent,
    AssistanceComponent
  ],
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss'],
})
export class StaffingComponent {
  staffing = STAFFING_CONSTANTS.HERO;
  heroAction = STAFFING_CONSTANTS.HERO_ACTION;
  cta = STAFFING_CONSTANTS.CTA;
  assistance = STAFFING_CONSTANTS.ASSISTANCE;
  process = STAFFING_CONSTANTS.PROCESS;
  services = STAFFING_CONSTANTS.SERVICES;
  phases = STAFFING_CONSTANTS.PHASES;
  stepFeatures = STAFFING_CONSTANTS.STEP_FEATURES;
  specializations = STAFFING_CONSTANTS.SPECIALIZATIONS;
  specializationsSection = STAFFING_CONSTANTS.SPECIALIZATIONS_SECTION;
  floatingIcons = STAFFING_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = STAFFING_CONSTANTS.HERO_STATS;

  hoveredSpecialization: number | null = null;

  talentDots = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  onSpecializationHover(index: number, isHovered: boolean): void {
    this.hoveredSpecialization = isHovered ? index : null;
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
