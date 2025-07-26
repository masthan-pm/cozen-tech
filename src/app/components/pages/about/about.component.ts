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
import { StoryComponent } from './story/story.component';
import { InnovationComponent } from './innovation/innovation.component';
import { ChoosingComponent } from './choosing/choosing.component';
import { MissionStatsComponent } from './mission-stats/mission-stats.component';
import { AwardsComponent } from './awards/awards.component';
import { GlobalPresenceComponent } from './global-presence/global-presence.component';

interface CultureItem {
  icon: string;
  title: string;
  description: string;
  image: string;
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
    StoryComponent,
    InnovationComponent,
    ChoosingComponent,
    MissionStatsComponent,
    AwardsComponent,
    GlobalPresenceComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about = ABOUT_CONSTANTS.ABOUT;
  cta = ABOUT_CONSTANTS.CTA;

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
}