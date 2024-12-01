export interface HeroContent {
  header: string;
  text: string;
  image: string;
}

export interface Stat {
  icon: string;
  stat: string;
  label: string;
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
