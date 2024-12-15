import { Component } from '@angular/core';
import { ValuesComponent } from './values/values.component';
import { TeamsComponent } from './teams/teams.component';
import { HeroContent, Stat } from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-about',
  imports: [HeroComponent, ValuesComponent, TeamsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about: HeroContent = {
    header: 'About Cozen Tech',
    text: 'Building the future of technology through innovation and exceptional talent since 2010',
    image: '/assets/pages/about/about.jpg',
  };

  mission = {
    title: 'Our Mission',
    content:
      'To bridge the gap between exceptional talent and innovative companies, fostering growth and success in the ever-evolving technology landscape. We strive to be the catalyst that transforms businesses through cutting-edge technology solutions and unparalleled talent acquisition services.',
  };

  stats: Stat[] = [
    { icon: 'public', stat: '15+', label: 'Countries Served' },
    { icon: 'work', stat: '1000+', label: 'Projects Completed' },
    { icon: 'group', stat: '500+', label: 'Happy Clients' },
    { icon: 'star', stat: '50+', label: 'Industry Awards' },
  ];
}
