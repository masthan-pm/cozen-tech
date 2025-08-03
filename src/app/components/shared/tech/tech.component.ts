import { Component, Input } from '@angular/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { GLOBAL_CONSTANTS } from '../../../constants/solutions/global.constants';

@Component({
  selector: 'app-tech',
  imports: [ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './tech.component.html',
  styleUrl: './tech.component.scss',
})
export class TechComponent {
  @Input() technologies = GLOBAL_CONSTANTS.TECHNOLOGIES;
  @Input() technologiesSection = GLOBAL_CONSTANTS.TECHNOLOGIES_SECTION;

  get innerRingTechnologies(): string[] {
    return this.technologies.slice(0, 6);
  }

  get outerRingTechnologies(): string[] {
    return this.technologies.slice(6, 12);
  }
}
