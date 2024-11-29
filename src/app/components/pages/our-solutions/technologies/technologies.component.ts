import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface TechStack {
  category: string;
  technologies: string[];
}

interface Feature {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent {
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

  techStack: TechStack[] = [
    {
      category: 'Frontend',
      technologies: [
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
      technologies: [
        'Node.js',
        'Python',
        'Java',
        '.NET',
        'Go',
        'Ruby on Rails',
      ],
    },
    {
      category: 'Cloud & DevOps',
      technologies: [
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
      technologies: [
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
