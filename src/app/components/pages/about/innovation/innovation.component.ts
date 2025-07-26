import { Component } from '@angular/core';
import { INNOVATION_CONSTANTS } from '../../../../constants/about/innovation.constants';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-innovation',
  imports: [ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './innovation.component.html',
  styleUrl: './innovation.component.scss',
})
export class InnovationComponent {
  innovation = INNOVATION_CONSTANTS.INNOVATION;
}
