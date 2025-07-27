import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../../shared/hero/hero.component';
import { CTAComponent } from '../../../shared/cta/cta.component';
import { ProcessComponent } from '../../../shared/process/process.component';
import { AssistanceComponent } from '../../../shared/assistance/assistance.component';
import { FeaturesComponent } from '../../../shared/features/features.component';
import { MASTER_VENDOR_CONSTANTS } from '../../../../constants/solutions/master-vendor.constants';

@Component({
  selector: 'app-master-vendor',
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
  templateUrl: './master-vendor.component.html',
  styleUrls: ['./master-vendor.component.scss'],
})
export class MasterVendorComponent {
  masterVendor = MASTER_VENDOR_CONSTANTS.HERO;
  cta = MASTER_VENDOR_CONSTANTS.CTA;
  assistance = MASTER_VENDOR_CONSTANTS.ASSISTANCE;
  process = MASTER_VENDOR_CONSTANTS.PROCESS;
  features = MASTER_VENDOR_CONSTANTS.FEATURES;
  services = MASTER_VENDOR_CONSTANTS.SERVICES;
  phases = MASTER_VENDOR_CONSTANTS.PHASES;
  stepFeatures = MASTER_VENDOR_CONSTANTS.STEP_FEATURES;
  benefits = MASTER_VENDOR_CONSTANTS.BENEFITS;
}
