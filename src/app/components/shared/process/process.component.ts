import { Component, Input } from '@angular/core';
import { Phase } from '../../shared/interfaces/solutions.interface';
import { STAFFING_CONSTANTS } from '../../../constants/solutions/staffing.constants';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  @Input() process = STAFFING_CONSTANTS.PROCESS;
  @Input() phases: Phase[] = STAFFING_CONSTANTS.PHASES;
  @Input() stepFeatures: string[][] = STAFFING_CONSTANTS.STEP_FEATURES;

  highlightedStep: number = -1;
  highlightStep(index: number): void {
    this.highlightedStep = index;
  }

  getStepProgress(index: number): number {
    const progress = [25, 50, 75, 100];
    return progress[index] || 0;
  }
}
