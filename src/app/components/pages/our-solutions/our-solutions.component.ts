import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Solution {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-our-solutions',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.scss'],
})
export class OurSolutionsComponent {
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
    // ... (remaining solutions following the same pattern)
  ];
}
