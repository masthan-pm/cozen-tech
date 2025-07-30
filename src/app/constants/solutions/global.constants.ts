import {
  Service,
  Phase,
  HeroContent,
  CTAContent,
  FloatingIcon,
  HeroStat,
} from '../../components/shared/interfaces/solutions.interface';

export const GLOBAL_CONSTANTS = {
  HERO: {
    header: 'Global Technology Solutions',
    text: 'Comprehensive software development and IT consulting services tailored to your business needs',
    image: '/assets/shared/services/global.jpg',
  } as HeroContent,

  HERO_ACTION: {
    label: 'Start Your Project',
    icon: 'arrow_forward',
    route: '/contact'
  },

  CTA: {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our solutions can help you achieve your business goals.",
  } as CTAContent,

  HERO_FLOATING_ICONS: [
    { x: 15, y: 25, icon: 'public', delay: 0 },
    { x: 75, y: 35, icon: 'code', delay: 0.5 },
    { x: 25, y: 65, icon: 'cloud', delay: 1 },
    { x: 85, y: 75, icon: 'security', delay: 1.5 },
    { x: 45, y: 15, icon: 'integration_instructions', delay: 2 },
    { x: 65, y: 85, icon: 'settings', delay: 2.5 },
    { x: 10, y: 80, icon: 'devices', delay: 3 },
    { x: 90, y: 20, icon: 'language', delay: 3.5 }
  ] as FloatingIcon[],

  HERO_STATS: [
    { icon: 'trending_up', number: '500+', label: 'Projects Delivered' },
    { icon: 'code', number: '50+', label: 'Technologies' },
    { icon: 'verified', number: '98%', label: 'Success Rate' }
  ] as HeroStat[],

  ASSISTANCE: {
    header: 'Our Global Services',
    subheader:
      'We offer a wide range of technology solutions to help businesses thrive in the digital age.',
  },

  SERVICES: [
    {
      icon: 'code',
      title: 'Custom Software Development',
      description:
        'Tailored software solutions designed to meet your specific business needs and objectives.',
      category: 'Development',
      features: ['Agile Methodology', 'Scalable Architecture', 'Modern Tech Stack'],
      stats: { projects: '200+', satisfaction: '98%', delivery: '2-4 weeks' }
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services including migration, optimization, and management.',
      category: 'Infrastructure',
      features: ['Multi-Cloud Support', 'Auto-Scaling', '99.9% Uptime'],
      stats: { migrations: '150+', cost_saving: '40%', performance: '3x faster' }
    },
    {
      icon: 'phone_android',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android devices.',
      category: 'Mobile',
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready'],
      stats: { apps: '100+', downloads: '1M+', rating: '4.8/5' }
    },
    {
      icon: 'business',
      title: 'Enterprise Solutions',
      description:
        'Scalable enterprise applications and systems integration services.',
      category: 'Enterprise',
      features: ['System Integration', 'Legacy Modernization', 'API Development'],
      stats: { enterprises: '50+', integrations: '300+', efficiency: '60%' }
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description:
        'Advanced security solutions to protect your digital assets and infrastructure.',
      category: 'Security',
      features: ['Threat Detection', 'Compliance', '24/7 Monitoring'],
      stats: { 'threats blocked': '10K+', compliance: '100%', response: '<1min' }
    },
    {
      icon: 'settings',
      title: 'DevOps Services',
      description:
        'Streamlined development and operations with modern DevOps practices.',
      category: 'Operations',
      features: ['CI/CD Pipeline', 'Infrastructure as Code', 'Monitoring'],
      stats: { deployments: '1K+', downtime: '99.9%', speed: '10x faster' }
    },
  ] as Service[],

  PROCESS: {
    header: 'Our Development Process',
    subheader:
      'We follow a systematic approach to deliver high-quality solutions that meet your business objectives.',
  },

  PHASES: [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements and objectives',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Designing the solution architecture and roadmap',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with agile methodology',
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and ongoing support',
    },
  ] as Phase[],

  TECHNOLOGIES_SECTION: {
    header: 'Technologies We Use',
    subheader:
      'We leverage the latest technologies to build robust and scalable solutions.',
  },

  TECHNOLOGIES: [
    'React',
    'Angular',
    'Node.js',
    'Python',
    'Java',
    '.NET',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'MongoDB',
    'PostgreSQL',
  ],

  STEP_FEATURES: [
    ['Requirements Gathering', 'Stakeholder Interviews', 'Business Analysis'],
    ['Solution Architecture', 'Technology Selection', 'Project Planning'],
    ['Agile Development', 'Code Implementation', 'Quality Assurance'],
    ['Testing & Deployment', 'Documentation', 'Ongoing Support'],
  ],
};
