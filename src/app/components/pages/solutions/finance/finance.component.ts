import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Expertise {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent {
  services: Service[] = [
    {
      icon: 'attach_money',
      title: 'Financial Planning',
      description:
        'Strategic financial planning and analysis to drive business growth and profitability.',
    },
    {
      icon: 'pie_chart',
      title: 'Management Accounting',
      description:
        'Comprehensive management accounting services for informed decision-making.',
    },
    {
      icon: 'description',
      title: 'Financial Reporting',
      description:
        'Accurate and timely financial reporting compliant with regulatory standards.',
    },
    {
      icon: 'trending_up',
      title: 'Business Analytics',
      description:
        'Data-driven insights to optimize financial performance and identify opportunities.',
    },
    {
      icon: 'calculate',
      title: 'Tax Services',
      description:
        'Expert tax planning and compliance services for businesses of all sizes.',
    },
    {
      icon: 'fact_check',
      title: 'Audit & Assurance',
      description:
        'Independent audit and assurance services to ensure financial integrity.',
    },
  ];

  benefits: Benefit[] = [
    {
      title: 'Expert Team',
      description:
        'Seasoned professionals with deep industry knowledge and expertise.',
    },
    {
      title: 'Tailored Solutions',
      description:
        'Customized financial strategies aligned with your business goals.',
    },
    {
      title: 'Technology-Driven',
      description:
        'Advanced financial tools and systems for accurate reporting and analysis.',
    },
  ];

  expertise: Expertise[] = [
    {
      category: 'Financial Management',
      items: [
        'Budgeting & Forecasting',
        'Cash Flow Management',
        'Financial Strategy',
        'Risk Assessment',
      ],
    },
    {
      category: 'Accounting Services',
      items: [
        'Bookkeeping',
        'Payroll Processing',
        'Account Reconciliation',
        'Financial Statements',
      ],
    },
    {
      category: 'Compliance',
      items: [
        'Tax Compliance',
        'Regulatory Reporting',
        'Internal Controls',
        'Audit Support',
      ],
    },
    {
      category: 'Advisory Services',
      items: [
        'Business Valuation',
        'M&A Support',
        'Financial Planning',
        'Process Optimization',
      ],
    },
  ];
}
