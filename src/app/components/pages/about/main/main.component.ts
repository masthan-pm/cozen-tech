import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  icon: string;
  stat: string;
  label: string;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  stats: Stat[] = [
    { icon: 'public', stat: '15+', label: 'Countries Served' },
    { icon: 'work', stat: '1000+', label: 'Projects Completed' },
    { icon: 'group', stat: '500+', label: 'Happy Clients' },
    { icon: 'star', stat: '50+', label: 'Industry Awards' },
  ];
}
