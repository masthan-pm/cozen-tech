import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-mortgage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.scss'],
})
export class MortgageComponent {
  services: Service[] = [
    {
      icon: 'description',
      title: 'Loan Processing',
      description:
        'Efficient processing of mortgage applications with attention to detail.',
    },
    {
      icon: 'search',
      title: 'Underwriting Support',
      description:
        'Thorough evaluation of mortgage applications following lending guidelines.',
    },
    {
      icon: 'schedule',
      title: 'Quick Closing',
      description: 'Streamlined closing process to ensure timely completion.',
    },
    {
      icon: 'security',
      title: 'Quality Control',
      description: 'Rigorous quality checks to maintain high standards.',
    },
    {
      icon: 'group',
      title: 'Customer Support',
      description: 'Dedicated support throughout the mortgage process.',
    },
    {
      icon: 'home',
      title: 'Property Evaluation',
      description: 'Comprehensive property assessment and valuation services.',
    },
  ];

  process = [
    {
      step: '01',
      title: 'Application',
      description: 'Initial review and setup',
    },
    { step: '02', title: 'Processing', description: 'Document verification' },
    { step: '03', title: 'Underwriting', description: 'Risk assessment' },
    { step: '04', title: 'Closing', description: 'Final approval and closing' },
  ];

  features: Feature[] = [
    {
      category: 'Processing Services',
      items: [
        'Application Review',
        'Document Verification',
        'Credit Analysis',
        'Income Validation',
      ],
    },
    {
      category: 'Underwriting',
      items: [
        'Risk Assessment',
        'Policy Compliance',
        'Decision Support',
        'Condition Review',
      ],
    },
    {
      category: 'Quality Assurance',
      items: [
        'File Audits',
        'Compliance Checks',
        'Error Prevention',
        'Process Improvement',
      ],
    },
    {
      category: 'Support Services',
      items: [
        'Customer Communication',
        'Status Updates',
        'Document Collection',
        'Issue Resolution',
      ],
    },
  ];
}
