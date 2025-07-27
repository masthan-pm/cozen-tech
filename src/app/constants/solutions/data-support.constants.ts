import {
  Service,
  Phase,
  Capability,
  HeroContent,
  CTAContent,
  FloatingIcon,
  HeroStat,
} from '../../components/shared/interfaces/solutions.interface';

export const DATA_SUPPORT_CONSTANTS = {
  HERO: {
    header: 'Data Support Services',
    text: 'Transform your data into actionable insights with our comprehensive data management solutions',
    image: '/assets/shared/services/data.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Transform Your Data?',
    text: "Let's discuss how our data solutions can drive your business success.",
  } as CTAContent,

  HERO_FLOATING_ICONS: [
    { x: 20, y: 30, icon: 'storage', delay: 0 },
    { x: 70, y: 25, icon: 'analytics', delay: 0.5 },
    { x: 30, y: 60, icon: 'bar_chart', delay: 1 },
    { x: 80, y: 70, icon: 'search', delay: 1.5 },
    { x: 15, y: 75, icon: 'security', delay: 2 },
    { x: 85, y: 15, icon: 'share', delay: 2.5 },
    { x: 50, y: 80, icon: 'cloud', delay: 3 },
    { x: 60, y: 20, icon: 'insights', delay: 3.5 }
  ] as FloatingIcon[],

  HERO_STATS: [
    { icon: 'storage', number: '10TB+', label: 'Data Processed' },
    { icon: 'analytics', number: '95%', label: 'Accuracy Rate' },
    { icon: 'speed', number: '24/7', label: 'Monitoring' }
  ] as HeroStat[],

  FEATURES: {
    header: 'Our Capabilities',
    subheader:
      'Comprehensive data management capabilities across various domains.',
  },

  ASSISTANCE: {
    header: 'Our Data Services',
    subheader:
      'Comprehensive data solutions to help you make informed business decisions.',
  },

  SERVICES: [
    {
      icon: 'storage',
      title: 'Data Management',
      description:
        'Comprehensive data organization, storage, and maintenance solutions.',
    },
    {
      icon: 'bar_chart',
      title: 'Analytics & Insights',
      description:
        'Advanced analytics to transform raw data into actionable business insights.',
    },
    {
      icon: 'search',
      title: 'Data Mining',
      description:
        'Extracting valuable patterns and trends from large datasets.',
    },
    {
      icon: 'security',
      title: 'Data Security',
      description: 'Robust security measures to protect sensitive information.',
    },
    {
      icon: 'storage',
      title: 'Database Administration',
      description: 'Expert management and optimization of database systems.',
    },
    {
      icon: 'share',
      title: 'Data Integration',
      description:
        'Seamless integration of data across multiple platforms and sources.',
    },
  ] as Service[],

  PROCESS: {
    header: 'Our Data Management Process',
    subheader: 'A systematic approach to handling your data needs effectively.',
  },

  PHASES: [
    {
      step: '01',
      title: 'Collection',
      description: 'Gathering and organizing data',
    },
    {
      step: '02',
      title: 'Processing',
      description: 'Cleaning and validating data',
    },
    {
      step: '03',
      title: 'Analysis',
      description: 'Extracting valuable insights',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Applying insights to business',
    },
  ] as Phase[],

  CAPABILITIES: [
    {
      category: 'Data Analytics',
      items: [
        'Predictive Analytics',
        'Business Intelligence',
        'Statistical Analysis',
        'Real-time Analytics',
      ],
    },
    {
      category: 'Data Management',
      items: [
        'Data Warehousing',
        'ETL Processing',
        'Data Cleansing',
        'Quality Assurance',
      ],
    },
    {
      category: 'Security & Compliance',
      items: [
        'Data Encryption',
        'Access Control',
        'Compliance Monitoring',
        'Risk Assessment',
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        'Cloud Solutions',
        'Database Design',
        'Performance Tuning',
        'Disaster Recovery',
      ],
    },
  ] as Capability[],

  STEP_FEATURES: [
    ['Data Source Identification', 'Requirements Gathering', 'Scope Definition'],
    ['Data Extraction', 'Cleaning & Validation', 'Transformation'],
    ['Statistical Analysis', 'Pattern Recognition', 'Insight Generation'],
    ['Report Creation', 'Dashboard Development', 'Implementation Support'],
  ],
};
