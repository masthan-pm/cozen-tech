import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeroContent,
  Stat,
} from '../../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../../shared/hero/hero.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  about: HeroContent = {
    header: 'About Cozen Tech',
    text: 'Building the future of technology through innovation and exceptional talent since 2010',
    image: '/assets/pages/about/about.jpg',
  };

  stats: Stat[] = [
    { icon: 'public', stat: '15+', label: 'Countries Served' },
    { icon: 'work', stat: '1000+', label: 'Projects Completed' },
    { icon: 'group', stat: '500+', label: 'Happy Clients' },
    { icon: 'star', stat: '50+', label: 'Industry Awards' },
  ];
}
