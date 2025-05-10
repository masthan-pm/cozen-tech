export interface CarouselSlide {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WELCOME_CONSTANT = {
  WELCOME: {
    title: {
      main: 'Empowering Businesses with',
      sub: 'Cutting-Edge IT Solutions',
    },
    content:
      'Partner with us to transform your business through innovative technology solutions and exceptional talent acquisition services.',
    explore: 'Explore Our Solutions',
    contact: 'Contact Us',
  },
  ABOUT: {
    header: 'About Our Company',
    content: {
      p1: 'Cozen Technology Solutions is a leading provider of IT services and talent solutions, helping businesses navigate the digital landscape since 2010. We combine technical expertise with deep industry knowledge to deliver innovative solutions that drive business growth and success.',
      p2: 'Our team of experts specializes in connecting top talent with innovative companies, providing end-to-end technology solutions, and ensuring seamless digital transformation.',
    },
    linkText: 'Read More',
    image: '/assets/pages/home/about-company.jpg',
  },
  CTA: {
    header: 'Ready to Transform Your Business?',
    text: "Let's discuss how we can help you achieve your business goals through our IT solutions and talent acquisition services.",
    buttonText: 'Get in Touch',
  },
};

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    backgroundImage: '/assets/pages/home/innovation.jpg',
    title: 'Innovative Solutions',
    subtitle: 'For Modern Business',
    description: 'Deploy cutting-edge technology to transform your operations and drive exceptional business outcomes.'
  },

  {
    backgroundImage: '/assets/pages/home/global.jpg',
    title: 'Global Reach',
    subtitle: 'Local Expertise',
    description: 'With presence in over 20 countries, we combine international experience with deep local market knowledge.'
  },
  {
    backgroundImage: '/assets/pages/home/digital-solutions.jpeg',
    title: 'Award-Winning',
    subtitle: 'Digital Solutions',
    description: 'Recognized for excellence in innovation, design, and technical implementation across industries.'
  },
  {
    backgroundImage: '/assets/pages/home/partnership.jpg',
    title: 'Expert Consultation',
    subtitle: 'Strategic Partnership',
    description: 'Our team of industry experts works alongside you to understand your unique challenges and implement effective solutions.'
  },
  {
    backgroundImage: '/assets/pages/home/hero.jpg',
    title: WELCOME_CONSTANT.WELCOME.title.main,
    subtitle: WELCOME_CONSTANT.WELCOME.title.sub,
    description: WELCOME_CONSTANT.WELCOME.content
  },
];
