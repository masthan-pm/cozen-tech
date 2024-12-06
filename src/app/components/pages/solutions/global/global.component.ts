import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  Service,
  Phase,
  HeroContent,
  CTAContent,
} from '../../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    ProcessComponent,
  ],
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent {
  global: HeroContent = {
    header: 'Global Technology Solutions',
    text: 'Comprehensive software development and IT consulting services tailored to your business needs',
    image: '/assets/shared/services/global.jpg',
  };

  cta: CTAContent = {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our solutions can help you achieve your business goals.",
  };

  services: Service[] = [
    {
      icon: 'code',
      title: 'Custom Software Development',
      description:
        'Tailored software solutions designed to meet your specific business needs and objectives.',
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services including migration, optimization, and management.',
    },
    {
      icon: 'phone_android',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      icon: 'business',
      title: 'Enterprise Solutions',
      description:
        'Scalable enterprise applications and systems integration services.',
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description:
        'Advanced security solutions to protect your digital assets and infrastructure.',
    },
    {
      icon: 'settings',
      title: 'DevOps Services',
      description:
        'Streamlined development and operations with modern DevOps practices.',
    },
  ];

  process = {
    header: 'Our Development Process',
    subheader:
      'We follow a systematic approach to deliver high-quality solutions that meet your business objectives.',
  };

  phases: Phase[] = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements and objectives',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Designing the solution architecture and roadmap',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with agile methodology',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and ongoing support',
    },
  ];

  technologies: string[] = [
    'React',
    'Angular',
    'Node.js',
    'Python',
    'Java',
    '.NET',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'MongoDB',
    'PostgreSQL',
  ];
}
