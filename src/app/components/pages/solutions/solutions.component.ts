import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CTAComponent } from '../../shared/cta/cta.component';
import { ServicesComponent } from '../../main/services/services.component';
import { SOLUTIONS_CONSTANTS } from '../../../constants/solutions/solutions.constants';

@Component({
  selector: 'app-our-solutions',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ServicesComponent,
    CTAComponent,
  ],
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class OurSolutionsComponent {
  solutionsHero = SOLUTIONS_CONSTANTS.HERO;
  cta = SOLUTIONS_CONSTANTS.CTA;
}
