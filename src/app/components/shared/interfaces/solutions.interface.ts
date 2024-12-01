export interface HeroContent {
  header: string;
  text: string;
  image: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

//data support
export interface Phase {
  step: string;
  title: string;
  description: string;
}

export interface Capability {
  category: string;
  items: string[];
}

//finance
export interface Benefit {
  title: string;
  description: string;
}

export interface Expertise {
  category: string;
  items: string[];
}

//hr payroll
export interface Feature {
  category: string;
  items: string[];
}
