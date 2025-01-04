import { Component } from '@angular/core';
import { ValuesComponent } from './values/values.component';
import { TeamsComponent } from './teams/teams.component';
import { HeroContent, Stat } from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';
import { ABOUT_CONSTANTS } from '../../../constants/about/about.constants';

@Component({
  selector: 'app-about',
  imports: [HeroComponent, ValuesComponent, TeamsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  about: HeroContent = ABOUT_CONSTANTS.ABOUT;

  mission = ABOUT_CONSTANTS.MISSION;

  stats: Stat[] = ABOUT_CONSTANTS.STATS;
}
