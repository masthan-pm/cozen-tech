import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';
import { StaggerAnimationDirective } from '../../../../directives/stagger-animation.directive';
import { GLOBAL_CONSTANTS } from '../../../../constants/solutions/global.constants';
import { ProcessComponent } from '../../../shared/process/process.component';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ScrollAnimationDirective,
    ScrollRevealDirective,
    StaggerAnimationDirective,
    ProcessComponent
  ],
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss'],
})
export class GlobalComponent {
  global = GLOBAL_CONSTANTS.HERO;
  cta = GLOBAL_CONSTANTS.CTA;
  assistance = GLOBAL_CONSTANTS.ASSISTANCE;
  services = GLOBAL_CONSTANTS.SERVICES;
  process = GLOBAL_CONSTANTS.PROCESS;
  phases = GLOBAL_CONSTANTS.PHASES;
  stepFeatures = GLOBAL_CONSTANTS.STEP_FEATURES;
  technologies = GLOBAL_CONSTANTS.TECHNOLOGIES;
  technologiesSection = GLOBAL_CONSTANTS.TECHNOLOGIES_SECTION;

  hoveredService: number | null = null;

  onServiceHover(index: number, isHovered: boolean): void {
    this.hoveredService = isHovered ? index : null;
  }
}
