import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimatedHeroComponent } from '../../../shared/animated-hero/animated-hero.component';
import { InteractiveProcessComponent } from '../../../shared/interactive-process/interactive-process.component';
import { TechShowcaseComponent } from '../../../shared/tech-showcase/tech-showcase.component';
import { SolutionCTAComponent } from '../../../shared/solution-cta/solution-cta.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { GLOBAL_CONSTANTS } from '../../../../constants/solutions/global.constants';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AnimatedHeroComponent,
    InteractiveProcessComponent,
    TechShowcaseComponent,
    SolutionCTAComponent,
    AssistanceComponent,
  ],
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent {
  global = GLOBAL_CONSTANTS.HERO;
  cta = GLOBAL_CONSTANTS.CTA;
  assistance = GLOBAL_CONSTANTS.ASSISTANCE;
  services = GLOBAL_CONSTANTS.SERVICES;
  process = GLOBAL_CONSTANTS.PROCESS;
  phases = GLOBAL_CONSTANTS.PHASES;
  technologies = GLOBAL_CONSTANTS.TECHNOLOGIES;
  technologiesSection = GLOBAL_CONSTANTS.TECHNOLOGIES_SECTION;

  heroStats = [
    { icon: 'code', value: '500+', label: 'Projects Delivered' },
    { icon: 'group', value: '50+', label: 'Expert Developers' },
    { icon: 'star', value: '98%', label: 'Client Satisfaction' },
  ];

  heroIcons = [
    'code', 'cloud', 'security', 'storage', 'memory', 'wifi',
    'developer_mode', 'integration_instructions', 'api', 'settings'
  ];

  processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Understanding your requirements and objectives',
      details: [
        'Requirement Analysis',
        'Technical Assessment',
        'Stakeholder Interviews',
        'Project Scope Definition'
      ],
      progress: 25
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Designing the solution architecture and roadmap',
      details: [
        'System Architecture',
        'UI/UX Design',
        'Technology Selection',
        'Project Timeline'
      ],
      progress: 50
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Building your solution with agile methodology',
      details: [
        'Agile Development',
        'Quality Assurance',
        'Performance Testing',
        'Security Audits'
      ],
      progress: 75
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Testing, deployment, and ongoing support',
      details: [
        'Production Deployment',
        'User Training',
        'Ongoing Support',
        'Performance Monitoring'
      ],
      progress: 100
    }
  ];

  techCategories = [
    {
      name: 'Frontend',
      technologies: ['React', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      icon: 'web',
      color: 'linear-gradient(135deg, #667eea, #764ba2)'
    },
    {
      name: 'Backend',
      technologies: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'Ruby on Rails'],
      icon: 'dns',
      color: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    },
    {
      name: 'Cloud & DevOps',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Jenkins'],
      icon: 'cloud',
      color: 'linear-gradient(135deg, #43e97b, #38f9d7)'
    },
    {
      name: 'Database',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'Cassandra'],
      icon: 'storage',
      color: 'linear-gradient(135deg, #fa709a, #fee140)'
    }
  ];
}