import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';
import { FINANCE_CONSTANTS } from '../../../../constants/solutions/finance.constants';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';

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

  // Financial particles for CTA
  financialParticles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    icon: ['trending_up', 'account_balance', 'attach_money', 'analytics'][
      Math.floor(Math.random() * 4)
    ],
  }));

  onBenefitHover(index: number, isHovered: boolean): void {
    this.hoveredBenefit = isHovered ? index : null;
  }

  selectTab(index: number): void {
    this.activeTab = index;
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

  getExpertiseIcon(index: number): string {
    const icons = ['trending_up', 'calculate', 'gavel', 'lightbulb'];
    return icons[index] || 'business';
  }

  getNodePosition(index: number, total: number): string {
    const angle = (360 / total) * index;
    const radius = 80;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return `translate(${x}px, ${y}px)`;
  }
}
