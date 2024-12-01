import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  Service,
  Phase,
  Feature,
  HeroContent,
} from '../../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../../shared/hero/hero.component';

@Component({
  selector: 'app-hr-payroll',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './hr-payroll.component.html',
  styleUrls: ['./hr-payroll.component.scss'],
})
export class HRPayrollComponent {
  hrPayroll: HeroContent = {
    header: 'HR & Payroll Services',
    text: 'Streamline your HR operations with our comprehensive human resources solutions',
    image: '/assets/shared/services/hr.jpg',
  };
  services: Service[] = [
    {
      icon: 'attach_money',
      title: 'Payroll Processing',
      description:
        'Accurate and timely payroll processing with tax compliance and reporting.',
    },
    {
      icon: 'group',
      title: 'HR Management',
      description:
        'Comprehensive HR services including employee onboarding and benefits administration.',
    },
    {
      icon: 'description',
      title: 'Compliance Management',
      description:
        'Ensuring compliance with labor laws and regulatory requirements.',
    },
    {
      icon: 'security',
      title: 'Benefits Administration',
      description:
        'Management of employee benefits programs and related services.',
    },
    {
      icon: 'schedule',
      title: 'Time & Attendance',
      description:
        'Advanced time tracking and attendance management solutions.',
    },
    {
      icon: 'star',
      title: 'Performance Management',
      description: 'Employee performance tracking and development programs.',
    },
  ];

  phases: Phase[] = [
    {
      step: '01',
      title: 'Data Collection',
      description: 'Gathering employee information',
    },
    {
      step: '02',
      title: 'Processing',
      description: 'Calculating payroll and benefits',
    },
    {
      step: '03',
      title: 'Verification',
      description: 'Quality checks and compliance',
    },
    {
      step: '04',
      title: 'Distribution',
      description: 'Payroll and reports delivery',
    },
  ];

  features: Feature[] = [
    {
      category: 'Payroll Services',
      items: [
        'Salary Processing',
        'Tax Calculations',
        'Deductions Management',
        'Payslip Generation',
      ],
    },
    {
      category: 'HR Administration',
      items: [
        'Employee Onboarding',
        'Personnel Records',
        'Leave Management',
        'Policy Administration',
      ],
    },
    {
      category: 'Benefits Management',
      items: [
        'Health Insurance',
        'Retirement Plans',
        'Wellness Programs',
        'Compensation Planning',
      ],
    },
    {
      category: 'Compliance & Reporting',
      items: [
        'Regulatory Compliance',
        'Statutory Reports',
        'Audit Support',
        'Documentation',
      ],
    },
  ];
}
