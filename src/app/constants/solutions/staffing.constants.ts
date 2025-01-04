import {
  Service,
  Phase,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const STAFFING_CONSTANTS = {
  HERO: {
    header: 'Staffing & Recruitment',
    text: 'Connect with exceptional tech talent through our comprehensive recruitment solutions',
    image: '/assets/shared/services/staffing.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Find Your Next Tech Star?',
    text: "Let's discuss how our recruitment solutions can help build your dream team.",
  } as CTAContent,

  ASSISTANCE: {
    header: 'Our Recruitment Services',
    subheader:
      'Comprehensive staffing solutions tailored to meet your technical talent needs.',
  },

  PROCESS: {
    header: 'Our Recruitment Process',
    subheader:
      'A proven methodology to identify and secure the best talent for your organization.',
  },

  SPECIALIZATIONS_SECTION: {
    header: 'Our Specializations',
    subheader:
      'We specialize in recruiting for various technical domains and roles.',
  },

  SERVICES: [
    {
      icon: 'search',
      title: 'Talent Sourcing',
      description:
        'Strategic identification and attraction of top tech talent through our extensive network.',
    },
    {
      icon: 'check_circle',
      title: 'Screening & Assessment',
      description:
        "Comprehensive evaluation of candidates' technical skills and cultural fit.",
    },
    {
      icon: 'person_pin',
      title: 'Permanent Placement',
      description:
        'Full-time placement services for critical technical and leadership roles.',
    },
    {
      icon: 'schedule',
      title: 'Contract Staffing',
      description:
        'Flexible staffing solutions for project-based and temporary requirements.',
    },
    {
      icon: 'group',
      title: 'Team Augmentation',
      description:
        'Seamless integration of skilled professionals into your existing teams.',
    },
    {
      icon: 'star',
      title: 'Executive Search',
      description:
        'Specialized recruitment for senior technical and leadership positions.',
    },
  ] as Service[],

  PHASES: [
    {
      step: '01',
      title: 'Requirements',
      description: 'Understanding your needs and culture',
    },
    {
      step: '02',
      title: 'Sourcing',
      description: 'Identifying qualified candidates',
    },
    {
      step: '03',
      title: 'Assessment',
      description: 'Technical and cultural evaluation',
    },
    {
      step: '04',
      title: 'Placement',
      description: 'Offer and onboarding support',
    },
  ] as Phase[],

  SPECIALIZATIONS: [
    'Software Development',
    'DevOps & Cloud',
    'Data Science & Analytics',
    'Cybersecurity',
    'Product Management',
    'UI/UX Design',
    'QA & Testing',
    'Technical Leadership',
  ],
};
