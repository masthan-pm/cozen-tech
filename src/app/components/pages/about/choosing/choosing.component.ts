import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { CHOOSING_CONSTANTS } from '../../../../constants/about/choosing.constants';
import { CommonModule } from '@angular/common';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';

@Component({
  selector: 'app-choosing',
  imports: [ScrollAnimationDirective, ScrollRevealDirective, StaggerAnimationDirective, ],
  templateUrl: './choosing.component.html',
  styleUrl: './choosing.component.scss'
})
export class ChoosingComponent {
  whyChoose = CHOOSING_CONSTANTS.whyChoose;
}
