import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import {
  Service,
  Phase,
  Capability,
  HeroContent,
} from '../../../shared/interfaces/solutions.interface';

@Component({
  selector: 'app-data-support',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './data-support.component.html',
  styleUrls: ['./data-support.component.scss'],
})
export class DataSupportComponent {
  dataSupport: HeroContent = {
    header: 'Data Support Services',
    text: 'Transform your data into actionable insights with our comprehensive data management solutions',
    image: '/assets/shared/services/data.jpg',
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
