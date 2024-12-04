import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  Capability,
  Service,
  Feature,
  HeroContent,
  CTAContent,
} from '../../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent, CTAComponent],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
  technologies: HeroContent = {
    header: 'Technologies',
    text: 'Leverage cutting-edge technologies to drive innovation and digital transformation',
    image: '/assets/shared/services/technologies.jpg',
  };

  cta: CTAContent = {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our technology solutions can drive innovation and digital transformation.",
  };

  services: Service[] = [
    {
      icon: 'code',
      title: 'Application Development',
      description:
        'Custom software solutions using cutting-edge technologies and frameworks.',
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
    },
    {
      icon: 'storage',
      title: 'Data Management',
      description: 'Advanced data storage and analytics solutions.',
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets.',
    },
    {
      icon: 'memory',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced algorithms.',
    },
    {
      icon: 'wifi',
      title: 'IoT Solutions',
      description: 'Connected device solutions for smart applications.',
    },
  ];

  techStack: Capability[] = [
    {
      category: 'Frontend',
      items: [
        'React',
        'Angular',
        'Vue.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'Ruby on Rails'],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Jenkins',
      ],
    },
    {
      category: 'Data & AI',
      items: [
        'TensorFlow',
        'PyTorch',
        'MongoDB',
        'PostgreSQL',
        'Elasticsearch',
        'Apache Kafka',
      ],
    },
  ];

  features: Feature[] = [
    {
      category: 'Development',
      items: [
        'Agile Methodology',
        'CI/CD Integration',
        'Code Quality',
        'Performance Optimization',
      ],
    },
    {
      category: 'Security',
      items: [
        'Penetration Testing',
        'Security Audits',
        'Compliance',
        'Authentication',
      ],
    },
    {
      category: 'Support',
      items: ['24/7 Monitoring', 'Technical Support', 'Maintenance', 'Updates'],
    },
    {
      category: 'Integration',
      items: [
        'API Development',
        'Third-party Integration',
        'Legacy Systems',
        'Microservices',
      ],
    },
  ];
}
