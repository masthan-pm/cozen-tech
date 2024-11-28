import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent {
  values: Value[] = [
    {
      icon: 'track_changes',
      title: 'Excellence',
      description:
        'We pursue excellence in every project and placement, setting the highest standards in the industry.',
    },
    {
      icon: 'group',
      title: 'Partnership',
      description:
        'Building lasting relationships with clients and candidates is at the core of our business philosophy.',
    },
    {
      icon: 'security',
      title: 'Integrity',
      description:
        'We maintain unwavering ethical standards and transparency in all our business dealings.',
    },
    {
      icon: 'favorite',
      title: 'Commitment',
      description:
        'Dedicated to delivering exceptional results and exceeding expectations in every engagement.',
    },
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description:
        'Continuously exploring new technologies and methodologies to drive better outcomes.',
    },
    {
      icon: 'rocket_launch',
      title: 'Growth',
      description:
        'Fostering continuous learning and development for our clients, candidates, and team.',
    },
  ];
}
