export interface HeroContent {
  header: string;
  text: string;
  image: string;
}

//data-support.component.ts
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

export interface Capability {
  category: string;
  items: string[];
}
