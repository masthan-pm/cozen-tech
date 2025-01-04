import {
  Service,
  Feature,
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const TRAINING_CONSTANTS = {
  HERO: {
    header: 'Training Programs',
    text: 'Empower your workforce with comprehensive technical and professional development programs',
    image: '/assets/shared/services/training.jpg',
  } as HeroContent,

  CTA: {
    header: 'Ready to Start Your Learning Journey?',
    text: "Let's discuss how our training programs can benefit your team.",
  } as CTAContent,

  FEATURES: {
    header: 'Program Features',
    subheader:
      'Comprehensive training features designed for effective learning.',
  },

  ASSISTANCE: {
    header: 'Our Training Programs',
    subheader:
      'Comprehensive learning solutions designed to enhance skills and accelerate careers.',
  },

  PROCESS: {
    header: 'Our Training Process',
    subheader:
      'A structured approach to skill development and professional growth.',
  },

  TECHNOLOGIES_SECTION: {
    header: 'Technologies Covered',
    subheader:
      'Stay current with training in the latest technologies and frameworks.',
  },

  SERVICES: [
    {
      icon: 'menu_book',
      title: 'Technical Training',
      description:
        'Comprehensive technical skills development programs for modern technologies.',
    },
    {
      icon: 'group',
      title: 'Soft Skills Development',
      description:
        'Essential communication and leadership skills training for professionals.',
    },
    {
      icon: 'computer',
      title: 'Virtual Learning',
      description:
        'Interactive online training sessions with expert instructors.',
    },
    {
      icon: 'track_changes',
      title: 'Customized Programs',
      description:
        'Tailored training solutions designed for specific organizational needs.',
    },
    {
      icon: 'military_tech',
      title: 'Certification Courses',
      description:
        'Industry-recognized certification preparation and training.',
    },
    {
      icon: 'school',
      title: 'Career Development',
      description:
        'Comprehensive career advancement and skill enhancement programs.',
    },
  ] as Service[],

  PHASES: [
    {
      step: '01',
      title: 'Assessment',
      description: 'Skills evaluation',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Custom learning path',
    },
    {
      step: '03',
      title: 'Training',
      description: 'Interactive learning',
    },
    {
      step: '04',
      title: 'Certification',
      description: 'Skill validation',
    },
  ],

  FEATURES_CONTENT: [
    {
      category: 'Learning Methods',
      items: [
        'Interactive Workshops',
        'Virtual Classrooms',
        'Hands-on Labs',
        'Self-paced Learning',
      ],
    },
    {
      category: 'Course Content',
      items: [
        'Industry Best Practices',
        'Real-world Projects',
        'Case Studies',
        'Assessment Tools',
      ],
    },
    {
      category: 'Support Services',
      items: [
        'Expert Mentoring',
        'Learning Resources',
        'Progress Tracking',
        'Career Guidance',
      ],
    },
    {
      category: 'Specializations',
      items: [
        'Software Development',
        'Cloud Computing',
        'Data Science',
        'Project Management',
      ],
    },
  ] as Feature[],

  TECHNOLOGIES: [
    'JavaScript/TypeScript',
    'Python',
    'Java',
    'React',
    'Node.js',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'Machine Learning',
    'DevOps',
    'Agile',
  ],
};
