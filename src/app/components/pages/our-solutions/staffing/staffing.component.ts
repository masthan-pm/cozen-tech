import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Phase {
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-staffing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss'],
})
export class StaffingComponent {
  services: Service[] = [
    {
      icon: 'search',
      title: 'Talent Sourcing',
      description:
        'Strategic identification and attraction of top tech talent through our extensive network.',
    },
    {
      icon: 'check_circle',
      title: 'Screening & Assessment',
      description:
        "Comprehensive evaluation of candidates' technical skills and cultural fit.",
    },
    {
      icon: 'person_pin',
      title: 'Permanent Placement',
      description:
        'Full-time placement services for critical technical and leadership roles.',
    },
    {
      icon: 'schedule',
      title: 'Contract Staffing',
      description:
        'Flexible staffing solutions for project-based and temporary requirements.',
    },
    {
      icon: 'group',
      title: 'Team Augmentation',
      description:
        'Seamless integration of skilled professionals into your existing teams.',
    },
    {
      icon: 'star',
      title: 'Executive Search',
      description:
        'Specialized recruitment for senior technical and leadership positions.',
    },
  ];

  phases: Phase[] = [
    {
      step: '01',
      title: 'Requirements',
      description: 'Understanding your needs and culture',
    },
    {
      step: '02',
      title: 'Sourcing',
      description: 'Identifying qualified candidates',
    },
    {
      step: '03',
      title: 'Assessment',
      description: 'Technical and cultural evaluation',
    },
    {
      step: '04',
      title: 'Placement',
      description: 'Offer and onboarding support',
    },
  ];

  specializations: string[] = [
    'Software Development',
    'DevOps & Cloud',
    'Data Science & Analytics',
    'Cybersecurity',
    'Product Management',
    'UI/UX Design',
    'QA & Testing',
    'Technical Leadership',
  ];
}
