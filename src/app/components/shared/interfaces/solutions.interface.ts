export interface HeroContent {
  header: string;
  text: string;
  image: string;
}

export interface CTAContent {
  header: string;
  text: string;
}

export interface Stat {
  icon: string;
  stat: string;
  label: string;
}

export interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

export interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  tags: string[];
}

export interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Phase {
  step: string;
  title: string;
  description: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Capability {
  category: string;
  items: string[];
}

export interface Expertise {
  category: string;
  items: string[];
}

export interface Feature {
  category: string;
  items: string[];
}

export interface CareerBenefit {
  title: string;
  description: string;
  image: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Testimonial {
  name: string;
  position: string;
  image: string;
  quote: string;
  rating: number;
}

export interface SuccessStory {
  client: string;
  title: string;
  image: string;
  description: string;
  results: string[];
}
