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

//data-support.component.ts
export interface Phase {
  step: string;
  title: string;
  description: string;
}

export interface Capability {
  category: string;
  items: string[];
}

//finance.component.ts
export interface Benefit {
  title: string;
  description: string;
}

export interface Expertise {
  category: string;
  items: string[];
}

//hr-payroll.component.ts
export interface Feature {
  category: string;
  items: string[];
}
