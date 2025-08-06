import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';

interface ServiceNew {
  title: string;
  description: string;
  image: string;
  route: string;
  features: string[];
  stats?: { [key: string]: string };
}

@Component({
  selector: 'app-services-new',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective
  ],
  templateUrl: './services-new.component.html',
  styleUrls: ['./services-new.component.scss'],
})
export class ServicesNewComponent {
  @Input() showServicesHeader = true;

  header = {
    title: 'Our Services',
    content: 'Comprehensive technology solutions designed to drive your business forward and ensure lasting success in the digital age.'
  };

  services: ServiceNew[] = [
    {
      title: 'Call Center',
      description: 'Professional customer support and communication services to enhance your customer experience and satisfaction.',
      image: 'assets/shared/services/staffing.jpg',
      route: '/solutions/staffing',
      features: [
        'Customer Support Services',
        'Technical Help Desk',
        'Multilingual Support',
        'Quality Assurance',
        '24/7 Availability'
      ],
      stats: {
        'calls': '50K+',
        'satisfaction': '98%',
        'response': '<30s'
      }
    },
    {
      title: 'Software',
      description: 'Thrive in the digital landscape with custom software solutions that drive innovation and efficiency. Achieve digital excellence with our comprehensive software services.',
      image: 'assets/shared/services/global.jpg',
      route: '/solutions/global',
      features: [
        'Workday Services',
        'Power BI Consulting Services',
        'Powerapps Consulting Services',
        'Mobile App Development Services',
        'Web Development Services'
      ],
      stats: {
        'projects': '200+',
        'satisfaction': '99%',
        'delivery': '2-4 weeks'
      }
    },
    {
      title: 'Accounting',
      description: 'Get strategic support to navigate the complexities of finance and streamline your operations. Maximize your financial potential to drive growth and stability with expert finance and accounting services.',
      image: 'assets/shared/services/finance.jpg',
      route: '/solutions/finance',
      features: [
        'Accounting Services',
        'Bookkeeping Services',
        'Tax Preparation Support Services',
        'Virtual Accounting Services',
        'CPA Support Services'
      ],
      stats: {
        'clients': '150+',
        'accuracy': '99.9%',
        'savings': '30%'
      }
    },
    {
      title: 'Engineering',
      description: 'Advanced engineering solutions and technical expertise to build robust, scalable systems that power your business operations.',
      image: 'assets/shared/services/technologies.jpg',
      route: '/solutions/technologies',
      features: [
        'System Architecture',
        'Infrastructure Design',
        'Performance Optimization',
        'Technical Consulting',
        'Quality Engineering'
      ],
      stats: {
        'systems': '100+',
        'uptime': '99.9%',
        'performance': '3x faster'
      }
    },
    {
      title: 'Mortgage',
      description: 'Comprehensive mortgage processing and underwriting solutions for financial institutions to streamline loan operations.',
      image: 'assets/shared/services/mortgage.jpg',
      route: '/solutions/mortgage',
      features: [
        'Loan Processing',
        'Underwriting Services',
        'Document Verification',
        'Compliance Review',
        'Quality Control'
      ],
      stats: {
        'loans': '5K+',
        'processing': '48hrs',
        'accuracy': '99.5%'
      }
    },
    {
      title: 'Healthcare',
      description: 'Specialized healthcare technology solutions and support services to improve patient care and operational efficiency.',
      image: 'assets/shared/services/hr.jpg',
      route: '/solutions/hr-payroll',
      features: [
        'Healthcare IT Solutions',
        'Patient Management Systems',
        'Compliance Support',
        'Data Security',
        'Telehealth Solutions'
      ],
      stats: {
        'patients': '10K+',
        'compliance': '100%',
        'security': 'HIPAA'
      }
    },
    {
      title: 'Creative',
      description: 'Transforming ideas into compelling designs that captivate and convert. Ignite your brand\'s story with creativity and innovation.',
      image: 'assets/shared/services/training.jpg',
      route: '/solutions/training',
      features: [
        'Graphic Design Services',
        'Video editing services',
        '3D animation services',
        'Illustration services',
        'DTP Services'
      ],
      stats: {
        'designs': '1K+',
        'satisfaction': '97%',
        'delivery': '24hrs'
      }
    }
  ];

  hoveredCard: number | null = null;

  onCardHover(index: number, isHovered: boolean): void {
    this.hoveredCard = isHovered ? index : null;
  }
}