import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  Expertise,
  Service,
  HeroContent,
  CTAContent,
} from '../../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
@Component({
  selector: 'app-master-vendor',
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
  templateUrl: './master-vendor.component.html',
  styleUrls: ['./master-vendor.component.scss'],
})
export class MasterVendorComponent {
  masterVendor: HeroContent = {
    header: 'Master Vendor Program',
    text: 'Optimize your vendor management with our comprehensive master vendor solutions',
    image: '/assets/shared/services/master.jpg',
  };

  cta: CTAContent = {
    header: 'Ready to Optimize Your Vendor Management?',
    text: "Let's discuss how our master vendor program can streamline your operations.",
  };

  assistance = {
    header: 'Our Master Vendor Services',
    subheader:
      'Comprehensive vendor management solutions designed to optimize your business operations.',
  };

  process = {
    header: 'Our Management Process',
    subheader: 'A systematic approach to vendor management and optimization.',
  };

  features = {
    header: 'Program Benefits',
    subheader: 'Key advantages of our master vendor program.',
  };

  services: Service[] = [
    {
      icon: 'work',
      title: 'Vendor Management',
      description:
        'Centralized management of vendor relationships and performance tracking.',
    },
    {
      icon: 'group',
      title: 'Resource Allocation',
      description:
        'Strategic allocation of resources across multiple projects and teams.',
    },
    {
      icon: 'trending_up',
      title: 'Performance Analytics',
      description: 'Comprehensive vendor performance monitoring and analytics.',
    },
    {
      icon: 'security',
      title: 'Risk Management',
      description:
        'Proactive identification and mitigation of vendor-related risks.',
    },
    {
      icon: 'settings',
      title: 'Process Optimization',
      description: 'Streamlined vendor onboarding and management processes.',
    },
    {
      icon: 'handshake',
      title: 'Contract Management',
      description: 'Efficient handling of vendor contracts and agreements.',
    },
  ];

  phases = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Vendor evaluation and selection',
    },
    { step: '02', title: 'Integration', description: 'Onboarding and setup' },
    { step: '03', title: 'Management', description: 'Performance monitoring' },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous improvement',
    },
  ];

  benefits: Expertise[] = [
    {
      category: 'Cost Management',
      items: [
        'Reduced Operational Costs',
        'Optimized Resource Allocation',
        'Consolidated Billing',
        'Budget Control',
      ],
    },
    {
      category: 'Quality Assurance',
      items: [
        'Performance Monitoring',
        'Quality Standards',
        'Service Level Agreements',
        'Continuous Improvement',
      ],
    },
    {
      category: 'Risk Mitigation',
      items: [
        'Compliance Management',
        'Risk Assessment',
        'Security Protocols',
        'Vendor Screening',
      ],
    },
    {
      category: 'Efficiency',
      items: [
        'Streamlined Processes',
        'Automated Workflows',
        'Resource Optimization',
        'Time Management',
      ],
    },
  ];
}
