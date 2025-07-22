export const TESTIMONIAL_CONST = {
  HEADER: 'What Our Clients Say',
  CONTENT: "Don't just take our word for it - hear from some of our satisfied clients about their experience working with Cozen Tech.",
  TESTIMONIALS: [
    {
      name: 'John Smith',
      position: 'CTO, TechCorp',
      image: 'assets/shared/clients/testimonials/testimonial1.jpg',
      quote: 'Cozen Tech has been instrumental in helping us build our engineering team. Their understanding of our technical requirements and company culture is exceptional. The quality of developers they provided exceeded our expectations.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      position: 'HR Director, InnovateSoft',
      image: 'assets/shared/clients/testimonials/testimonial2.jpg',
      quote: 'The quality of candidates and the speed of recruitment have exceeded our expectations. Their team is professional and thorough in their approach. We have built lasting partnerships through their services.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      position: 'CEO, DataFlow',
      image: 'assets/shared/clients/testimonials/testimonial3.jpg',
      quote: 'Working with Cozen Tech has transformed our hiring process. They understand our needs and consistently deliver top talent. Their insights into the tech market are invaluable for strategic planning.',
      rating: 5
    },
  ],

  // Additional configuration for enhanced features
  ANIMATION_CONFIG: {
    STAGGER_DELAY: 150,
    CARD_HOVER_DURATION: 500,
    STAR_ANIMATION_DELAY: 100
  },

  // Glass effect configuration
  GLASS_CONFIG: {
    BLUR_STRENGTH: 20,
    OPACITY_BASE: 0.12,
    OPACITY_HOVER: 0.18,
    BORDER_OPACITY: 0.18
  }
};