import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { SolutionCTAComponent } from '../../../shared/solution-cta/solution-cta.component';
import { DATA_SUPPORT_CONSTANTS } from '../../../../constants/solutions/data-support.constants';

@Component({
  selector: 'app-data-support',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    ProcessComponent,
    AssistanceComponent,
    FeaturesComponent,
    SolutionCTAComponent,
  ],
  templateUrl: './data-support.component.html',
  styleUrls: ['./data-support.component.scss'],
})
export class DataSupportComponent {
  dataSupport = DATA_SUPPORT_CONSTANTS.HERO;
  heroAction = DATA_SUPPORT_CONSTANTS.HERO_ACTION;
  cta = DATA_SUPPORT_CONSTANTS.CTA;
  features = DATA_SUPPORT_CONSTANTS.FEATURES;
  assistance = DATA_SUPPORT_CONSTANTS.ASSISTANCE;
  services = DATA_SUPPORT_CONSTANTS.SERVICES;
  process = DATA_SUPPORT_CONSTANTS.PROCESS;
  phases = DATA_SUPPORT_CONSTANTS.PHASES;
  stepFeatures = DATA_SUPPORT_CONSTANTS.STEP_FEATURES;
  capabilities = DATA_SUPPORT_CONSTANTS.CAPABILITIES;
  floatingIcons = DATA_SUPPORT_CONSTANTS.HERO_FLOATING_ICONS;
  heroStats = DATA_SUPPORT_CONSTANTS.HERO_STATS;
}
