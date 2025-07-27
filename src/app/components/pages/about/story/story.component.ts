import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { Milestone } from '../../../shared/interfaces/solutions.interface';
import { STORY_CONSTANTS } from '../../../../constants/about/story.constants';

@Component({
  selector: 'app-story',
  imports: [ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  story = STORY_CONSTANTS.STORY;
  milestones: Milestone[] = STORY_CONSTANTS.MILESTONES;

}
