import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuesComponent } from './values/values.component';
import { TeamsComponent } from './teams/teams.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';
import { ABOUT_CONSTANTS } from '../../../constants/about/about.constants';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface WhyChooseFeature {
  icon: string;
  title: string;
  description: string;
  metrics?: Array<{
    value: string;
    label: string;
  }>;
}

interface CultureItem {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface InnovationFeature {
  title: string;
  description: string;
}

interface Award {
  icon: string;
  title: string;
  organization: string;
  year: string;
  description: string;
}

interface GlobalLocation {
  city: string;
  description: string;
  x: number; // percentage position
  y: number; // percentage position
}

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    HeroComponent,
    ValuesComponent,
    TeamsComponent,
    CTAComponent,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about = ABOUT_CONSTANTS.ABOUT;
  mission = ABOUT_CONSTANTS.MISSION;
  vision = ABOUT_CONSTANTS.VISION;
  stats = ABOUT_CONSTANTS.STATS;
  cta = ABOUT_CONSTANTS.CTA;
  particles = Array(3).fill(0);

  story = {
    title: 'Building the Future of Technology',
    paragraph1: 'Founded in 2010 with a vision to bridge the gap between exceptional talent and innovative companies, Cozen Tech has grown from a small startup to a global leader in technology solutions and talent acquisition. Our journey began with a simple belief: that the right people, combined with cutting-edge technology, can transform businesses and create lasting impact.',
    paragraph2: 'Today, we serve over 500 clients across 15+ countries, delivering comprehensive IT solutions and connecting top-tier talent with forward-thinking organizations. Our commitment to excellence, innovation, and partnership has made us a trusted advisor in the ever-evolving technology landscape.'
  };

  milestones: Milestone[] = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a vision to transform the tech industry'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Expanded operations to 5 countries'
    },
    {
      year: '2018',
      title: 'Innovation Hub',
      description: 'Launched our first innovation center'
    },
    {
      year: '2022',
      title: 'Industry Leader',
      description: 'Recognized as top IT solutions provider'
    }
  ];

  statsSection = {
    title: 'Our Impact in Numbers',
    subtitle: 'Measurable results that demonstrate our commitment to excellence and client success.'
  };

  whyChoose = {
    title: 'Why Choose Cozen Tech',
    subtitle: 'Discover what sets us apart in the competitive technology landscape.',
    features: [
      {
        icon: 'psychology',
        title: 'Innovation-First Approach',
        description: 'We leverage cutting-edge technologies and methodologies to deliver solutions that drive your business forward and keep you ahead of the competition.',
        metrics: [
          { value: '95%', label: 'Client Satisfaction' },
          { value: '40+', label: 'Technologies' }
        ]
      },
      {
        icon: 'groups',
        title: 'Expert Team',
        description: 'Our diverse team of seasoned professionals brings deep industry expertise and technical knowledge to every project and placement.',
        metrics: [
          { value: '200+', label: 'Experts' },
          { value: '15+', label: 'Years Avg. Experience' }
        ]
      },
      {
        icon: 'public',
        title: 'Global Reach',
        description: 'With presence in multiple countries and time zones, we provide 24/7 support and understand local market dynamics.',
        metrics: [
          { value: '15+', label: 'Countries' },
          { value: '24/7', label: 'Support' }
        ]
      },
      {
        icon: 'verified',
        title: 'Proven Track Record',
        description: 'Our portfolio of successful projects and satisfied clients speaks to our ability to deliver exceptional results consistently.',
        metrics: [
          { value: '1000+', label: 'Projects' },
          { value: '98%', label: 'Success Rate' }
        ]
      }
    ] as WhyChooseFeature[]
  };

  culture = {
    title: 'Our Company Culture',
    subtitle: 'A vibrant, inclusive environment where innovation thrives and every team member can reach their full potential.',
    items: [
      {
        icon: 'diversity_3',
        title: 'Diversity & Inclusion',
        description: 'We celebrate diverse perspectives and create an inclusive environment where everyone can thrive.',
        image: 'assets/pages/blog/blog.jpg'
      },
      {
        icon: 'school',
        title: 'Continuous Learning',
        description: 'We invest in our team\'s growth through training, conferences, and skill development programs.',
        image: 'assets/pages/blog/blog-img2.jpg'
      },
      {
        icon: 'balance',
        title: 'Work-Life Balance',
        description: 'We believe in maintaining a healthy balance between professional growth and personal well-being.',
        image: 'assets/pages/blog/blog-img1.jpg'
      },
    ] as CultureItem[]
  };

  innovation = {
    title: 'Innovation & Technology',
    subtitle: 'At the forefront of technological advancement, we continuously explore and adopt emerging technologies.',
    primaryTech: ['AI/ML', 'Cloud', 'DevOps', 'Mobile'],
    secondaryTech: ['React', 'Angular', 'Node.js', 'Python', 'Java', '.NET'],
    features: [
      {
        title: 'Research & Development',
        description: 'Dedicated R&D team exploring emerging technologies and industry trends.'
      },
      {
        title: 'Technology Partnerships',
        description: 'Strategic partnerships with leading technology companies and platforms.'
      },
      {
        title: 'Innovation Labs',
        description: 'State-of-the-art facilities for prototyping and testing new solutions.'
      },
      {
        title: 'Continuous Integration',
        description: 'Modern CI/CD practices ensuring rapid and reliable software delivery.'
      }
    ] as InnovationFeature[]
  };

  awards = {
    title: 'Awards & Recognition',
    subtitle: 'Our commitment to excellence has been recognized by industry leaders and organizations.',
    list: [
      {
        icon: 'emoji_events',
        title: 'Best IT Solutions Provider',
        organization: 'Tech Excellence Awards',
        year: '2023',
        description: 'Recognized for outstanding innovation in enterprise solutions.'
      },
      {
        icon: 'star',
        title: 'Top Employer',
        organization: 'Great Place to Work',
        year: '2023',
        description: 'Certified as one of the best places to work in technology.'
      },
      {
        icon: 'workspace_premium',
        title: 'Innovation Leader',
        organization: 'Industry Innovation Council',
        year: '2022',
        description: 'Awarded for breakthrough achievements in AI and cloud solutions.'
      },
      {
        icon: 'military_tech',
        title: 'Client Choice Award',
        organization: 'Customer Success Institute',
        year: '2022',
        description: 'Highest client satisfaction ratings in the technology sector.'
      }
    ] as Award[]
  };

  globalPresence = {
    title: 'Global Presence',
    subtitle: 'Serving clients worldwide with local expertise and global capabilities.',
    locations: [
      { city: 'San Francisco', description: 'Headquarters & Innovation Hub', x: 15, y: 35 },
      { city: 'New York', description: 'East Coast Operations', x: 25, y: 30 },
      { city: 'London', description: 'European Headquarters', x: 50, y: 25 },
      { city: 'Singapore', description: 'Asia Pacific Hub', x: 75, y: 45 },
      { city: 'Sydney', description: 'Australia Operations', x: 85, y: 70 }
    ] as GlobalLocation[],
    stats: [
      { value: '2+', description: 'Countries Served' },
      { value: '25+', description: 'Global Clients' },
      { value: '24/7', description: 'Support Coverage' },
      { value: '50+', description: 'Local Partners' }
    ]
  };
}