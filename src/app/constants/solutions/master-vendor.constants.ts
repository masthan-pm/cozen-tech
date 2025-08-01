import {
  Expertise,
  Service,
  HeroContent,
  CTAContent,
  FloatingIcon,
  HeroStat,
} from '../../components/shared/interfaces/solutions.interface';

export const MASTER_VENDOR_CONSTANTS = {
  HERO: {
    header: 'Master Vendor Program',
    text: 'Optimize your vendor management with our comprehensive master vendor solutions',
    image: '/assets/shared/services/master.jpg',
  } as HeroContent,

  HERO_ACTION: {
    label: 'Optimize Vendor Management',
    icon: 'handshake',
    route: '/contact'
  },

  CTA: {
    header: 'Ready to Optimize Your Vendor Management?',
    text: "Let's discuss how our master vendor program can streamline your operations.",
  } as CTAContent,

  HERO_FLOATING_ICONS: [
    { x: 20, y: 30, icon: 'work', delay: 0 },
    { x: 70, y: 25, icon: 'group', delay: 0.5 },
    { x: 30, y: 60, icon: 'trending_up', delay: 1 },
    { x: 80, y: 70, icon: 'security', delay: 1.5 },
    { x: 15, y: 75, icon: 'settings', delay: 2 },
    { x: 85, y: 15, icon: 'handshake', delay: 2.5 },
    { x: 50, y: 80, icon: 'analytics', delay: 3 },
    { x: 60, y: 20, icon: 'verified', delay: 3.5 }
  ] as FloatingIcon[],

  HERO_STATS: [
    { icon: 'work', number: '200+', label: 'Vendors Managed' },
    { icon: 'trending_down', number: '30%', label: 'Cost Reduction' },
    { icon: 'verified', number: '99%', label: 'Quality Score' }
  ] as HeroStat[],

  ASSISTANCE: {
    header: 'Our Master Vendor Services',
    subheader:
      'Comprehensive vendor management solutions designed to optimize your business operations.',
  },

  PROCESS: {
    header: 'Our Management Process',
    subheader: 'A systematic approach to vendor management and optimization.',
  },

  FEATURES: {
    header: 'Program Benefits',
    subheader: 'Key advantages of our master vendor program.',
  },

  SERVICES: [
    {
      icon: 'work',
      title: 'Vendor Management',
      description:
        'Centralized management of vendor relationships and performance tracking.',
      category: 'Management',
      features: ['Centralized Control', 'Performance Tracking', 'Relationship Management'],
      stats: { vendors: '200+', efficiency: '85%', satisfaction: '95%' }
    },
    {
      icon: 'group',
      title: 'Resource Allocation',
      description:
        'Strategic allocation of resources across multiple projects and teams.',
      category: 'Resources',
      features: ['Strategic Allocation', 'Project Management', 'Team Optimization'],
      stats: { projects: '500+', utilization: '90%', 'cost saving': '30%' }
    },
    {
      icon: 'trending_up',
      title: 'Performance Analytics',
      description: 'Comprehensive vendor performance monitoring and analytics.',
      category: 'Analytics',
      features: ['Performance Monitoring', 'Data Analytics', 'Reporting'],
      stats: { metrics: '50+', accuracy: '99%', insights: '1000+' }
    },
    {
      icon: 'security',
      title: 'Risk Management',
      description:
        'Proactive identification and mitigation of vendor-related risks.',
      category: 'Risk',
      features: ['Risk Assessment', 'Mitigation Strategies', 'Compliance'],
      stats: { 'risks mitigated': '100+', compliance: '100%', incidents: '0' }
    },
    {
      icon: 'settings',
      title: 'Process Optimization',
      description: 'Streamlined vendor onboarding and management processes.',
      category: 'Process',
      features: ['Streamlined Onboarding', 'Automated Workflows', 'Efficiency'],
      stats: { processes: '20+', automation: '80%', 'time saved': '50%' }
    },
    {
      icon: 'handshake',
      title: 'Contract Management',
      description: 'Efficient handling of vendor contracts and agreements.',
      category: 'Contracts',
      features: ['Contract Handling', 'Agreement Management', 'Compliance'],
      stats: { contracts: '300+', compliance: '100%', renewals: '95%' }
    },
  ] as Service[],

  PHASES: [
    {
      step: '01',
      title: 'Assessment',
      description: 'Vendor evaluation and selection',
    },
    {
      step: '02',
      title: 'Integration',
      description: 'Onboarding and setup',
    },
    {
      step: '03',
      title: 'Management',
      description: 'Performance monitoring',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous improvement',
    },
  ],

  BENEFITS: [
    {
      category: 'Cost Management',
      icon: 'attach_money',
      items: [
        'Reduced Operational Costs',
        'Optimized Resource Allocation',
        'Consolidated Billing',
        'Budget Control',
      ],
    },
    {
      category: 'Quality Assurance',
      icon: 'fact_check',
      items: [
        'Performance Monitoring',
        'Quality Standards',
        'Service Level Agreements',
        'Continuous Improvement',
      ],
    },
    {
      category: 'Risk Mitigation',
      icon: 'security',
      items: [
        'Compliance Management',
        'Risk Assessment',
        'Security Protocols',
        'Vendor Screening',
      ],
    },
    {
      category: 'Efficiency',
      icon: 'speed',
      items: [
        'Streamlined Processes',
        'Automated Workflows',
        'Resource Optimization',
        'Time Management',
      ],
    },
  ] as Expertise[],

  STEP_FEATURES: [
    ['Vendor Evaluation', 'Capability Assessment', 'Risk Analysis'],
    ['Onboarding Setup', 'Process Integration', 'System Configuration'],
    ['Performance Monitoring', 'Quality Tracking', 'Service Delivery'],
    ['Process Optimization', 'Continuous Improvement', 'Efficiency Gains'],
  ],
};
