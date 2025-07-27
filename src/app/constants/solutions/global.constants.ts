import {
  Service,
  Phase,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const GLOBAL_CONSTANTS = {
  HERO: {
    header: 'Global Technology Solutions',
    text: 'Comprehensive software development and IT consulting services tailored to your business needs',
    image: '/assets/shared/services/global.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our solutions can help you achieve your business goals.",
  } as CTAContent,

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
    },
    {
      icon: 'cloud',
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services including migration, optimization, and management.',
    },
    {
      icon: 'phone_android',
      title: 'Mobile App Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android devices.',
    },
    {
      icon: 'business',
      title: 'Enterprise Solutions',
      description:
        'Scalable enterprise applications and systems integration services.',
    },
    {
      icon: 'security',
      title: 'Cybersecurity',
      description:
        'Advanced security solutions to protect your digital assets and infrastructure.',
    },
    {
      icon: 'settings',
      title: 'DevOps Services',
      description:
        'Streamlined development and operations with modern DevOps practices.',
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
