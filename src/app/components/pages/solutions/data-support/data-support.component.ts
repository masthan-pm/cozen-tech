import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import {
  Service,
  Phase,
  Capability,
  HeroContent,
  CTAContent,
} from '../../../shared/interfaces/solutions.interface';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';

@Component({
  selector: 'app-data-support',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    ProcessComponent,
    AssistanceComponent,
  ],
  templateUrl: './data-support.component.html',
  styleUrls: ['./data-support.component.scss'],
})
export class DataSupportComponent {
  dataSupport: HeroContent = {
    header: 'Data Support Services',
    text: 'Transform your data into actionable insights with our comprehensive data management solutions',
    image: '/assets/shared/services/data.jpg',
  };

  cta: CTAContent = {
    header: 'Ready to Transform Your Data?',
    text: "Let's discuss how our data solutions can drive your business success.",
  };

  assistance = {
    header: 'Our Data Services',
    subheader:
      'Comprehensive data solutions to help you make informed business decisions.',
  };

  services: Service[] = [
    {
      icon: 'storage',
      title: 'Data Management',
      description:
        'Comprehensive data organization, storage, and maintenance solutions.',
    },
    {
      icon: 'bar_chart',
      title: 'Analytics & Insights',
      description:
        'Advanced analytics to transform raw data into actionable business insights.',
    },
    {
      icon: 'search',
      title: 'Data Mining',
      description:
        'Extracting valuable patterns and trends from large datasets.',
    },
    {
      icon: 'security',
      title: 'Data Security',
      description: 'Robust security measures to protect sensitive information.',
    },
    {
      icon: 'storage',
      title: 'Database Administration',
      description: 'Expert management and optimization of database systems.',
    },
    {
      icon: 'share',
      title: 'Data Integration',
      description:
        'Seamless integration of data across multiple platforms and sources.',
    },
  ];

  process = {
    header: 'Our Data Management Process',
    subheader: 'A systematic approach to handling your data needs effectively.',
  };
  phases: Phase[] = [
    {
      step: '01',
      title: 'Collection',
      description: 'Gathering and organizing data',
    },
    {
      step: '02',
      title: 'Processing',
      description: 'Cleaning and validating data',
    },
    {
      step: '03',
      title: 'Analysis',
      description: 'Extracting valuable insights',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Applying insights to business',
    },
  ];

  capabilities: Capability[] = [
    {
      category: 'Data Analytics',
      items: [
        'Predictive Analytics',
        'Business Intelligence',
        'Statistical Analysis',
        'Real-time Analytics',
      ],
    },
    {
      category: 'Data Management',
      items: [
        'Data Warehousing',
        'ETL Processing',
        'Data Cleansing',
        'Quality Assurance',
      ],
    },
    {
      category: 'Security & Compliance',
      items: [
        'Data Encryption',
        'Access Control',
        'Compliance Monitoring',
        'Risk Assessment',
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        'Cloud Solutions',
        'Database Design',
        'Performance Tuning',
        'Disaster Recovery',
      ],
    },
  ];
}
