import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';
import { FINANCE_CONSTANTS } from '../../../../constants/solutions/finance.constants';
import { HeroComponent } from '../../../shared/hero/hero.component';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective,
    HeroComponent
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
  floatingIcons = FINANCE_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = FINANCE_CONSTANTS.HERO_STATS;

  activeSlide: number = 0;
  hoveredBenefit: number | null = null;
  activeTab: number = 0;

  // Chart data for hero section
  chartBars = [60, 80, 45, 90, 70, 85, 55];

  // Floating coins data
  floatingCoins = [
    { x: 15, y: 25, icon: 'attach_money' },
    { x: 75, y: 35, icon: 'euro_symbol' },
    { x: 25, y: 65, icon: 'currency_pound' },
    { x: 85, y: 75, icon: 'currency_yen' },
    { x: 45, y: 15, icon: 'account_balance' }
  ];

  // Financial particles for CTA
  financialParticles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    icon: ['trending_up', 'account_balance', 'attach_money', 'analytics'][Math.floor(Math.random() * 4)]
  }));

  selectSlide(index: number): void {
    this.activeSlide = index;
  }

  onBenefitHover(index: number, isHovered: boolean): void {
    this.hoveredBenefit = isHovered ? index : null;
  }

  selectTab(index: number): void {
    this.activeTab = index;
  }

  getServiceGraphData(index: number): number[] {
    const graphData = [
      [40, 60, 45, 80, 65, 90, 75],
      [30, 50, 70, 55, 85, 60, 95],
      [50, 40, 80, 60, 75, 85, 70],
      [35, 65, 50, 90, 70, 80, 85],
      [45, 55, 75, 65, 95, 70, 80],
      [60, 70, 55, 85, 75, 90, 65]
    ];
    return graphData[index] || [50, 60, 70, 80];
  }

  getServiceBenefits(index: number): string[] {
    const benefits = [
      ['Strategic Planning', 'Risk Assessment', 'Growth Analysis'],
      ['Cost Optimization', 'Process Automation', 'Compliance Management'],
      ['Real-time Reporting', 'Data Visualization', 'Performance Metrics'],
      ['Market Analysis', 'Trend Forecasting', 'Decision Support'],
      ['Tax Optimization', 'Regulatory Compliance', 'Risk Mitigation'],
      ['Quality Assurance', 'Process Review', 'Control Testing']
    ];
    return benefits[index] || [];
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
      ['Cloud-based', 'Real-time Updates', 'Mobile Access']
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
