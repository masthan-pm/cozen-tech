import { Component } from '@angular/core';
import { ABOUT_CONSTANTS } from '../../../../constants/about/about.constants';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-mission-stats',
  imports: [ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './mission-stats.component.html',
  styleUrl: './mission-stats.component.scss',
})
export class MissionStatsComponent {
  mission = ABOUT_CONSTANTS.MISSION;
  vision = ABOUT_CONSTANTS.VISION;
  stats = ABOUT_CONSTANTS.STATS;
  statsSection = ABOUT_CONSTANTS.STATS_SECTION;
  particles = Array(3).fill(0);
}
