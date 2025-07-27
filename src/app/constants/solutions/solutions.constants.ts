import {
  HeroContent,
  CTAContent,
} from '../../components/shared/interfaces/solutions.interface';

export const SOLUTIONS_CONSTANTS = {
  HERO: {
    header: 'Our Solutions',
    text: 'Comprehensive technology solutions tailored to drive your business forward',
    image: 'assets/shared/services/global.jpg',
  } as HeroContent,

  HERO_ACTION: {
    label: 'Explore Solutions',
    icon: 'arrow_forward',
    route: '/contact'
  },

  CTA: {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how our solutions can help you achieve your business goals.",
  } as CTAContent,
};
