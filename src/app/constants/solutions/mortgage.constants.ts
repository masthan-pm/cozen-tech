import {
  Expertise,
  Service,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const MORTGAGE_CONSTANTS = {
  HERO: {
    header: 'Mortgage Services',
    text: 'Streamline your mortgage operations with our comprehensive processing solutions',
    image: '/assets/shared/services/mortgage.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Streamline Your Mortgage Operations?',
    text: "Let's discuss how our mortgage services can enhance your business efficiency.",
  } as CTAContent,

  ASSISTANCE: {
    header: 'Our Mortgage Services',
    subheader:
      'Comprehensive mortgage processing solutions designed to streamline your operations.',
  },

  PROCESS: {
    header: 'Our Mortgage Process',
    subheader:
      'A streamlined approach to mortgage processing and underwriting.',
  },

  FEATURES: {
    header: 'Service Features',
    subheader:
      'Comprehensive mortgage processing features to ensure efficiency and accuracy.',
  },

  SERVICES: [
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
  ] as Service[],

  PHASES: [
    {
      step: '01',
      title: 'Application',
      description: 'Initial review and setup',
    },
    {
      step: '02',
      title: 'Processing',
      description: 'Document verification',
    },
    {
      step: '03',
      title: 'Underwriting',
      description: 'Risk assessment',
    },
    {
      step: '04',
      title: 'Closing',
      description: 'Final approval and closing',
    },
  ],

  FEATURES_CONTENT: [
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
  ] as Expertise[],

  STEP_FEATURES: [
    ['Application Review', 'Document Collection', 'Initial Assessment'],
    ['Document Verification', 'Credit Analysis', 'Income Validation'],
    ['Risk Assessment', 'Policy Compliance', 'Decision Support'],
    ['Final Approval', 'Document Preparation', 'Closing Coordination'],
  ],
};
