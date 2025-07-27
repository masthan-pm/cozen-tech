import {
  Service,
  Phase,
  Feature,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const HR_PAYROLL_CONSTANTS = {
  HERO: {
    header: 'HR & Payroll Services',
    text: 'Streamline your HR operations with our comprehensive human resources solutions',
    image: '/assets/shared/services/hr.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Optimize Your HR Operations?',
    text: "Let's discuss how our HR solutions can streamline your workforce management.",
  } as CTAContent,

  FEATURES: {
    header: 'Comprehensive Features',
    subheader: 'Explore our full range of HR and payroll management features.',
  },

  ASSISTANCE: {
    header: 'Our HR & Payroll Services',
    subheader:
      'Comprehensive HR and payroll solutions designed to optimize your workforce management.',
  },

  PROCESS: {
    header: 'Our Process',
    subheader: 'A streamlined approach to HR and payroll management.',
  },

  SERVICES: [
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
  ] as Service[],

  PHASES: [
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
  ] as Phase[],

  FEATURES_CONTENT: [
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
  ] as Feature[],

  STEP_FEATURES: [
    ['Employee Data Collection', 'Information Verification', 'System Setup'],
    ['Payroll Calculation', 'Benefits Processing', 'Tax Computations'],
    ['Quality Assurance', 'Compliance Checks', 'Error Resolution'],
    ['Payroll Distribution', 'Report Generation', 'Document Delivery'],
  ],
};
