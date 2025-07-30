import {
  Capability,
  Service,
  Feature,
  HeroContent,
  CTAContent,
  FloatingIcon,
  HeroStat,
} from '../../components/shared/interfaces/solutions.interface';

export const TECHNOLOGIES_CONSTANTS = {
  HERO: {
    header: 'Technologies',
    text: 'Leverage cutting-edge technologies to drive innovation and digital transformation',
    image: '/assets/shared/services/technologies.jpg',
  } as HeroContent,

  HERO_ACTION: {
    label: 'Get Started',
    icon: 'arrow_forward',
    route: '/contact'
  },

  CTA: {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our technology solutions can drive innovation and digital transformation.",
  } as CTAContent,

  HERO_FLOATING_ICONS: [
    { x: 20, y: 25, icon: 'code', delay: 0 },
    { x: 70, y: 30, icon: 'memory', delay: 0.5 },
    { x: 30, y: 65, icon: 'security', delay: 1 },
    { x: 80, y: 70, icon: 'wifi', delay: 1.5 },
    { x: 15, y: 80, icon: 'cloud', delay: 2 },
    { x: 85, y: 20, icon: 'psychology', delay: 2.5 },
    { x: 50, y: 15, icon: 'rocket_launch', delay: 3 },
    { x: 60, y: 85, icon: 'integration_instructions', delay: 3.5 }
  ] as FloatingIcon[],

  HERO_STATS: [
    { icon: 'code', number: '100+', label: 'Technologies' },
    { icon: 'cloud', number: '99.9%', label: 'Uptime' },
    { icon: 'security', number: '100%', label: 'Secure' }
  ] as HeroStat[],

  FEATURES: {
    header: 'Key Features',
    subheader: 'Essential features of our technology solutions.',
  },

  ASSISTANCE: {
    header: 'Our Technology Solutions',
    subheader:
      'Comprehensive technology solutions to power your digital transformation.',
  },

  TECH_STACK_SECTION: {
    header: 'Our Tech Stack',
    subheader:
      'Modern technologies we use to build robust and scalable solutions.',
  },

  SERVICES: [
    {
      icon: 'code',
      title: 'Application Development',
      description:
        'Custom software solutions using cutting-edge technologies and frameworks.',
      category: 'Development',
      features: ['Custom Solutions', 'Modern Frameworks', 'Scalable Architecture'],
      stats: { applications: '300+', technologies: '50+', satisfaction: '98%' }
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      category: 'Cloud',
      features: ['Infrastructure', 'Migration', 'Optimization'],
      stats: { migrations: '200+', uptime: '99.9%', 'cost saving': '40%' }
    },
    {
      icon: 'storage',
      title: 'Data Management',
      description: 'Advanced data storage and analytics solutions.',
      category: 'Data',
      features: ['Storage Solutions', 'Analytics', 'Management'],
      stats: { 'data processed': '10TB+', insights: '1000+', efficiency: '80%' }
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets.',
      category: 'Security',
      features: ['Threat Protection', 'Compliance', 'Monitoring'],
      stats: { 'threats blocked': '10K+', compliance: '100%', breaches: '0' }
    },
    {
      icon: 'memory',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced algorithms.',
      category: 'AI/ML',
      features: ['Machine Learning', 'Predictive Analytics', 'Automation'],
      stats: { models: '100+', accuracy: '95%', automation: '70%' }
    },
    {
      icon: 'wifi',
      title: 'IoT Solutions',
      description: 'Connected device solutions for smart applications.',
      category: 'IoT',
      features: ['Device Connectivity', 'Smart Applications', 'Real-time Data'],
      stats: { devices: '1000+', connectivity: '99.9%', 'data points': '1M+' }
    },
  ] as Service[],

  TECH_STACK: [
    {
      category: 'Frontend',
      items: [
        'React',
        'Angular',
        'Vue.js',
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', '.NET', 'Go', 'Ruby on Rails'],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        'AWS',
        'Azure',
        'Google Cloud',
        'Docker',
        'Kubernetes',
        'Jenkins',
      ],
    },
    {
      category: 'Data & AI',
      items: [
        'TensorFlow',
        'PyTorch',
        'MongoDB',
        'PostgreSQL',
        'Elasticsearch',
        'Apache Kafka',
      ],
    },
  ] as Capability[],

  FEATURES_CONTENT: [
    {
      category: 'Development',
      items: [
        'Agile Methodology',
        'CI/CD Integration',
        'Code Quality',
        'Performance Optimization',
      ],
    },
    {
      category: 'Security',
      items: [
        'Penetration Testing',
        'Security Audits',
        'Compliance',
        'Authentication',
      ],
    },
    {
      category: 'Support',
      items: ['24/7 Monitoring', 'Technical Support', 'Maintenance', 'Updates'],
    },
    {
      category: 'Integration',
      items: [
        'API Development',
        'Third-party Integration',
        'Legacy Systems',
        'Microservices',
      ],
    },
  ] as Feature[],
};
