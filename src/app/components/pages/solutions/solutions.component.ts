import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  HeroContent,
  CTAContent,
} from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CTAComponent } from '../../shared/cta/cta.component';

interface Solution {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-our-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent, CTAComponent],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class OurSolutionsComponent {
  solutionsHero: HeroContent = {
    header: 'Our Solutions',
    text: 'Comprehensive technology solutions tailored to drive your business forward',
    image: 'assets/shared/services/global.jpg',
  };

  cta: CTAContent = {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our solutions can help you achieve your business goals.",
  };

  solutions: Solution[] = [
    {
      icon: 'public',
      title: 'Global Technology Solutions',
      description:
        'End-to-end software development and IT consulting services tailored to your business needs.',
      features: [
        'Custom Software Development',
        'Cloud Solutions',
        'Digital Transformation',
        'System Integration',
      ],
    },
    {
      icon: 'group',
      title: 'Staffing and Recruitment',
      description:
        'Connect with top tech talent through our extensive network and proven recruitment process.',
      features: [
        'IT Staffing',
        'Executive Search',
        'Contract Staffing',
        'Direct Hire',
      ],
    },
    {
      icon: 'storage',
      title: 'Data Support',
      description:
        'Comprehensive data management and analytics solutions to drive informed decision-making.',
      features: [
        'Data Analytics',
        'Database Management',
        'Business Intelligence',
        'Data Migration',
      ],
    },
    {
      icon: 'trending_up',
      title: 'Finance and Accounting',
      description:
        'Expert financial services and accounting solutions for business growth and compliance.',
      features: [
        'Financial Analysis',
        'Accounting Services',
        'Risk Management',
        'Compliance',
      ],
    },
    {
      icon: 'security',
      title: 'HR and Payroll Services',
      description:
        'Streamline your HR operations with our comprehensive human resources solutions.',
      features: [
        'Payroll Processing',
        'Benefits Administration',
        'HR Consulting',
        'Employee Management',
      ],
    },
    {
      icon: 'business_center',
      title: 'Master Vendor Program',
      description:
        'Simplified vendor management and procurement processes for enhanced efficiency.',
      features: [
        'Vendor Management',
        'Cost Optimization',
        'Quality Control',
        'Performance Tracking',
      ],
    },
    {
      icon: 'school',
      title: 'Training Programs',
      description:
        'Comprehensive training solutions to upskill your workforce and stay competitive.',
      features: [
        'Technical Training',
        'Soft Skills Development',
        'Leadership Programs',
        'Certification Courses',
      ],
    },
    {
      icon: 'code',
      title: 'Technologies',
      description:
        'Cutting-edge technology solutions across various domains and platforms.',
      features: [
        'Cloud Computing',
        'AI & Machine Learning',
        'Blockchain',
        'IoT Solutions',
      ],
    },
    {
      icon: 'home',
      title: 'Mortgage Services',
      description:
        'Comprehensive mortgage processing and underwriting solutions for financial institutions.',
      features: [
        'Loan Processing',
        'Underwriting Services',
        'Document Verification',
        'Compliance Review',
      ],
    },
  ];
}
