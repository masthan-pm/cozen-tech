import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  Expertise,
  Service,
  HeroContent,
} from '../../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../../shared/hero/hero.component';

@Component({
  selector: 'app-master-vendor',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './master-vendor.component.html',
  styleUrls: ['./master-vendor.component.scss'],
})
export class MasterVendorComponent {
  masterVendor: HeroContent = {
    header: 'Master Vendor Program',
    text: 'Optimize your vendor management with our comprehensive master vendor solutions',
    image: '/assets/shared/services/master.jpg',
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

  process = [
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
