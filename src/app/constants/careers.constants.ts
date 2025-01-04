import {
  CareerBenefit,
  HeroContent,
  Job,
} from '../components/shared/interfaces/solutions.interface';

export const CAREERS_CONSTANTS = {
  HERO: {
    header: 'Join Our Team',
    text: 'Build your career with a company that values innovation, growth, and excellence',
    image: '/assets/pages/careers/careers.jpg',
  } as HeroContent,

  LOCATIONS: ['San Francisco, CA', 'New York, NY', 'Austin, TX', 'Remote'],

  DEPARTMENTS: ['Engineering', 'HR', 'Product'],
  BENEFITS_HEADING: {
    header: 'Why Join Us?',
    content:
      'We offer competitive compensation and a comprehensive benefits package designed to support your well-being and growth.',
  },

  JOBS: [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120K - $180K',
      description:
        'We are seeking an experienced Full Stack Developer to join our engineering team. The ideal candidate will have strong expertise in React, Node.js, and cloud technologies.',
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        '5+ years of experience in full-stack development',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Excellent problem-solving and communication skills',
      ],
    },
    {
      title: 'Technical Recruiter',
      department: 'HR',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70K - $100K',
      description:
        "Join our talent acquisition team to help identify and recruit top tech talent. You'll work closely with hiring managers and candidates throughout the recruitment process.",
      requirements: [
        "Bachelor's degree in HR or related field",
        '3+ years of technical recruiting experience',
        'Strong understanding of technical roles and requirements',
        'Excellent networking and communication skills',
        'Experience with ATS and recruitment tools',
      ],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$90K - $130K',
      description:
        'Lead the development and execution of product strategies that align with our company vision and market needs.',
      requirements: [
        "Bachelor's degree in Business or related field",
        '4+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Experience with Agile methodologies',
      ],
    },
  ] as Job[],

  BENEFITS: [
    {
      title: 'Health & Wellness',
      description:
        'Comprehensive medical, dental, and vision coverage for you and your family.',
      image: 'assets/pages/careers/careers-img1.jpg',
    },
    {
      title: 'Growth & Development',
      description:
        'Continuous learning opportunities, mentorship programs, and career advancement.',
      image: 'assets/pages/careers/careers-img2.jpg',
    },
    {
      title: 'Work-Life Balance',
      description:
        'Flexible work arrangements, paid time off, and remote work options.',
      image: 'assets/pages/careers/careers-img3.jpg',
    },
  ] as CareerBenefit[],
};
