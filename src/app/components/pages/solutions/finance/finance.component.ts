import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';
import { FINANCE_CONSTANTS } from '../../../../constants/solutions/finance.constants';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { SolutionCTAComponent } from '../../../shared/solution-cta/solution-cta.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective,
    HeroComponent,
    AssistanceComponent,
    FeaturesComponent,
    SolutionCTAComponent
  ],
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent {
  finance = FINANCE_CONSTANTS.HERO;
  heroAction = FINANCE_CONSTANTS.HERO_ACTION;
  benefitsHeading = FINANCE_CONSTANTS.HEADER;
  cta = FINANCE_CONSTANTS.CTA;
  features = FINANCE_CONSTANTS.FEATURES;
  assistance = FINANCE_CONSTANTS.ASSISTANCE;
  services = FINANCE_CONSTANTS.SERVICES;
  benefits = FINANCE_CONSTANTS.BENEFITS;
  expertise = FINANCE_CONSTANTS.EXPERTISE;
  floatingIcons = FINANCE_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = FINANCE_CONSTANTS.HERO_STATS;

  hoveredBenefit: number | null = null;
  activeTab: number = 0;

  onBenefitHover(index: number, isHovered: boolean): void {
    this.hoveredBenefit = isHovered ? index : null;
  }

  getBenefitIcon(index: number): string {
    const icons = ['groups', 'tune', 'computer'];
    return icons[index] || 'star';
  }

  getBenefitProgress(index: number): number {
    const progress = [85, 92, 78];
    return progress[index] || 80;
  }

  getBenefitFeatures(index: number): string[] {
    const features = [
      ['CPA Certified', 'Industry Experience', '24/7 Support'],
      ['Custom Solutions', 'Scalable Systems', 'Integration Ready'],
      ['Cloud-based', 'Real-time Updates', 'Mobile Access'],
    ];
    return features[index] || [];
  }
}
