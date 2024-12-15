import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  SERVICES_CONSTANTS,
  Service,
} from '../../../constants/home/services.constants';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  @Input() showServicesHeader = true;

  header = SERVICES_CONSTANTS.HEADER;
  services: Service[] = SERVICES_CONSTANTS.SERVICES_LIST;
}
