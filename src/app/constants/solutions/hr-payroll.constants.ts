import {
  Service,
  Phase,
  Feature,
  HeroContent,
  CTAContent,
  FloatingIcon,
  HeroStat,
} from '../../components/shared/interfaces/solutions.interface';

export const HR_PAYROLL_CONSTANTS = {
  HERO: {
    header: 'HR & Payroll Services',
    text: 'Streamline your HR operations with our comprehensive human resources solutions',
    image: '/assets/shared/services/hr.jpg',
  } as HeroContent,

  HERO_ACTION: {
    label: 'Streamline HR Operations',
    icon: 'rocket_launch',
    route: '/contact'
  },

  CTA: {
    header: 'Ready to Optimize Your HR Operations?',
    text: "Let's discuss how our HR solutions can streamline your workforce management.",
  } as CTAContent,

  HERO_FLOATING_ICONS: [
    { x: 15, y: 20, icon: 'groups', delay: 0 },
    { x: 35, y: 15, icon: 'person', delay: 0.3 },
    { x: 55, y: 25, icon: 'schedule', delay: 0.6 },
    { x: 75, y: 18, icon: 'attach_money', delay: 0.9 },
    { x: 25, y: 45, icon: 'security', delay: 1.2 },
    { x: 65, y: 40, icon: 'favorite', delay: 1.5 },
    { x: 85, y: 50, icon: 'business_center', delay: 1.8 },
    { x: 45, y: 70, icon: 'verified', delay: 2.1 }
  ] as FloatingIcon[],

  HERO_STATS: [
    { icon: 'people', number: '10,000+', label: 'Employees Managed' },
    { icon: 'schedule', number: '99.9%', label: 'Accuracy Rate' },
    { icon: 'speed', number: '24hrs', label: 'Processing Time' }
  ] as HeroStat[],

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
