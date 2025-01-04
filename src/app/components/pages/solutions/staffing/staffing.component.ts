import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { STAFFING_CONSTANTS } from '../../../../constants/solutions/staffing.constants';

@Component({
  selector: 'app-staffing',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    ProcessComponent,
    AssistanceComponent,
  ],
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss'],
})
export class StaffingComponent {
  staffing = STAFFING_CONSTANTS.HERO;
  cta = STAFFING_CONSTANTS.CTA;
  assistance = STAFFING_CONSTANTS.ASSISTANCE;
  process = STAFFING_CONSTANTS.PROCESS;
  services = STAFFING_CONSTANTS.SERVICES;
  phases = STAFFING_CONSTANTS.PHASES;
  specializations = STAFFING_CONSTANTS.SPECIALIZATIONS;
  specializationsSection = STAFFING_CONSTANTS.SPECIALIZATIONS_SECTION;
}
