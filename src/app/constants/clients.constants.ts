import {
  HeroContent,
  SuccessStory,
} from '../components/shared/interfaces/solutions.interface';

export const CLIENTS_CONSTANTS = {
  HERO: {
    header: 'Our Clients',
    text: 'Partnering with leading companies to drive innovation and growth',
    image: '/assets/pages/clients/client.jpg',
  } as HeroContent,

  HEADER: {
    header: 'Success Stories',
    content: 'Real results from our partnerships with leading companies.',
  },

  TRUSTED_BY: {
    header: 'Trusted by Industry Leaders',
    text: 'We work with companies of all sizes, from startups to enterprises, helping them build exceptional teams.',
  },

  TESTIMONIALS: {
    header: 'What Our Clients Say',
    content:
      "Don't just take our word for it - hear from some of our satisfied clients.",
  },

  READMORE: 'Read Full Story',

  CTA: {
    header: 'Ready to Join Our Success Stories?',
    text: "Let's discuss how we can help you achieve your business goals through our IT solutions and talent acquisition services.",
    buttonText: 'Get Started Today',
  },

  SUCCESS_STORIES: [
    {
      client: 'TechCorp',
      title: 'Building a World-Class Engineering Team',
      image: 'assets/pages/clients/stories/story1.jpg',
      description:
        'How we helped TechCorp scale their engineering team from 10 to 50 members in just 6 months.',
      results: [
        '50+ successful placements',
        '30% reduction in hiring time',
        '95% retention rate',
      ],
    },
    {
      client: 'InnovateSoft',
      title: 'Digital Transformation Success',
      image: 'assets/pages/clients/stories/story2.jpg',
      description:
        "Supporting InnovateSoft's digital transformation journey with key technical talent.",
      results: [
        '40% increase in productivity',
        '25% cost savings',
        'Successful cloud migration',
      ],
    },
    {
      client: 'DataFlow',
      title: 'Rapid Team Expansion',
      image: 'assets/pages/clients/stories/story3.jpg',
      description:
        'Helping DataFlow rapidly scale their development team for a major product launch.',
      results: [
        '20+ developers hired',
        '2 weeks average time-to-hire',
        '100% project deadline met',
      ],
    },
  ] as SuccessStory[],
};
