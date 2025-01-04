import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { GLOBAL_CONSTANTS } from '../../../../constants/solutions/global.constants';

@Component({
  selector: 'app-global',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    ProcessComponent,
    AssistanceComponent,
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
  technologies = GLOBAL_CONSTANTS.TECHNOLOGIES;
  technologiesSection = GLOBAL_CONSTANTS.TECHNOLOGIES_SECTION;
}
