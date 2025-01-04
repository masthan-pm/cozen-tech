import {
  Capability,
  Service,
  Feature,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const TECHNOLOGIES_CONSTANTS = {
  HERO: {
    header: 'Technologies',
    text: 'Leverage cutting-edge technologies to drive innovation and digital transformation',
    image: '/assets/shared/services/technologies.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our technology solutions can drive innovation and digital transformation.",
  } as CTAContent,

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
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
    },
    {
      icon: 'storage',
      title: 'Data Management',
      description: 'Advanced data storage and analytics solutions.',
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for digital assets.',
    },
    {
      icon: 'memory',
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by advanced algorithms.',
    },
    {
      icon: 'wifi',
      title: 'IoT Solutions',
      description: 'Connected device solutions for smart applications.',
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
