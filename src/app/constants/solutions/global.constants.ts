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
