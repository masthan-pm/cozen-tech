import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TEAMS_CONSTANTS } from '../../../../constants/about/teams.constants';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';

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
  imports: [CommonModule, ScrollRevealDirective, ScrollAnimationDirective],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  header: string = TEAMS_CONSTANTS.HEADER;
  content: string = TEAMS_CONSTANTS.CONTENT;
  team: TeamMember[] = TEAMS_CONSTANTS.TEAM;
}
