import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  email: string;
}

@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  team: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'assets/pages/about/leadership1.jpg',
      bio: 'With over 15 years of experience in technology and recruitment, Sarah leads our global strategy and operations.',
      linkedin: '#',
      email: 'sarah@cozentech.com',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'assets/pages/about/leadership2.jpg',
      bio: 'Michael brings 20 years of software development and technical leadership experience to drive our technology initiatives.',
      linkedin: '#',
      email: 'michael@cozentech.com',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Talent Acquisition',
      image: 'assets/pages/about/leadership3.jpg',
      bio: 'Emily specializes in building high-performing teams and developing innovative recruitment strategies.',
      linkedin: '#',
      email: 'emily@cozentech.com',
    },
    {
      name: 'David Kim',
      role: 'Director of Client Relations',
      image: 'assets/pages/about/leadership2.jpg',
      bio: 'David excels in building and maintaining strong client relationships across various industries.',
      linkedin: '#',
      email: 'david@cozentech.com',
    },
  ];
}
