import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { ABOUT_CONSTANTS } from '../../../../constants/about/about.constants';

@Component({
  selector: 'app-global-presence',
  imports: [ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './global-presence.component.html',
  styleUrl: './global-presence.component.scss'
})
export class GlobalPresenceComponent {
  globalPresence = ABOUT_CONSTANTS.globalPresence;

}
