import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { AWARDS_CONSTANTS } from '../../../../constants/about/awards.constants';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';

@Component({
  selector: 'app-awards',
  imports: [ScrollAnimationDirective, ScrollRevealDirective, StaggerAnimationDirective],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  awards = AWARDS_CONSTANTS.awards;

}
