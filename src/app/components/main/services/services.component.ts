import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  destinatedLink: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  @Input() showServicesHeader = true;

  header = {
    title: 'Our Services',
    content:
      'Comprehensive technology solutions and services designed to drive your business forward and ensure lasting success in the digital age.',
    linkText: 'Read More',
  };

  services: Service[] = [
    {
      icon: 'public',
      title: 'Global Technology Solutions',
      description:
        'End-to-end software development and IT consulting services tailored to your business needs.',
      image: 'assets/shared/services/global.jpg',
      destinatedLink: '/solutions/global',
    },
    {
      icon: 'group',
      title: 'Staffing and Recruitment',
      description:
        'Connect with top tech talent through our extensive network and proven recruitment process.',
      image: 'assets/shared/services/staffing.jpg',
      destinatedLink: '/solutions/staffing',
    },
    {
      icon: 'attach_money',
      title: 'Finance and Accounting',
      description:
        'Comprehensive financial services and solutions to drive business growth and success.',
      image: 'assets/shared/services/finance.jpg',
      destinatedLink: '/solutions/finance',
    },
    {
      icon: 'shield',
      title: 'HR and Payroll Services',
      description:
        'Streamline your HR operations with our comprehensive human resources solutions.',
      image: 'assets/shared/services/hr.jpg',
      destinatedLink: '/solutions/hr',
    },
    {
      icon: 'storage',
      title: 'Data Support',
      description:
        'Expert data management and analytics solutions for informed decision-making.',
      image: 'assets/shared/services/data.jpg',
      destinatedLink: '/solutions/data',
    },
    {
      icon: 'home',
      title: 'Mortgage Services',
      description:
        'Specialized mortgage processing and underwriting services for financial institutions.',
      image: 'assets/shared/services/mortgage.jpg',
      destinatedLink: '/solutions/mortgage',
    },
    {
      icon: 'work',
      title: 'Master Vendor Program',
      description:
        'Simplified vendor management and procurement processes for enhanced efficiency.',
      image: 'assets/shared/services/master.jpg',
      destinatedLink: '/solutions/master',
    },
    {
      icon: 'school',
      title: 'Training Programs',
      description:
        'Comprehensive training solutions to upskill your workforce and stay competitive.',
      image: 'assets/shared/services/training.jpg',
      destinatedLink: '/solutions/training',
    },
    {
      icon: 'code',
      title: 'Technologies',
      description:
        'Cutting-edge technology solutions across various domains and platforms.',
      image: 'assets/shared/services/technologies.jpg',
      destinatedLink: '/solutions/technologies',
    },
  ];
}
