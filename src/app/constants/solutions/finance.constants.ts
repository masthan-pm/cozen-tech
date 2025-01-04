import {
  Service,
  Benefit,
  Expertise,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const FINANCE_CONSTANTS = {
  HERO: {
    header: 'Finance & Accounting Services',
    text: 'Comprehensive financial solutions to drive your business growth and success',
    image: '/assets/shared/services/finance.jpg',
  } as HeroContent,

  HEADER: {
    title: 'Why Choose Our Financial Services',
    content:
      'Experience the benefits of working with a trusted financial partner.',
  },

  CTA: {
    header: 'Ready to Optimize Your Finances?',
    text: "Let's discuss how our financial solutions can drive your business success.",
  } as CTAContent,

  FEATURES: {
    header: 'Areas of Expertise',
    subheader: 'Comprehensive financial expertise across various domains.',
  },

  ASSISTANCE: {
    header: 'Our Financial Services',
    subheader:
      'Expert financial solutions tailored to meet your business objectives and drive growth.',
  },

  SERVICES: [
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
  ] as Service[],

  BENEFITS: [
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
  ] as Benefit[],

  EXPERTISE: [
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
  ] as Expertise[],
};
