import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { TRAINING_CONSTANTS } from '../../../../constants/solutions/training.constants';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    CTAComponent,
    ProcessComponent,
    AssistanceComponent,
    FeaturesComponent,
  ],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
})
export class TrainingComponent {
  training = TRAINING_CONSTANTS.HERO;
  cta = TRAINING_CONSTANTS.CTA;
  features = TRAINING_CONSTANTS.FEATURES;
  assistance = TRAINING_CONSTANTS.ASSISTANCE;
  process = TRAINING_CONSTANTS.PROCESS;
  services = TRAINING_CONSTANTS.SERVICES;
  phases = TRAINING_CONSTANTS.PHASES;
  stepFeatures = TRAINING_CONSTANTS.STEP_FEATURES;
  featuresContent = TRAINING_CONSTANTS.FEATURES_CONTENT;
  technologies = TRAINING_CONSTANTS.TECHNOLOGIES;
  technologiesSection = TRAINING_CONSTANTS.TECHNOLOGIES_SECTION;
}
