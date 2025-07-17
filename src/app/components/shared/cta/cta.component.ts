import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { StaggerAnimationDirective } from '../../../directives/stagger-animation.directive';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective, StaggerAnimationDirective],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss'],
})
export class CTAComponent {
  @Input() header = 'Ready to Transform Your Business?';
  @Input() text =
    "Let's discuss how our solutions can help you achieve your business goals.";
  @Input() buttonText = 'Contact Us Today';
  @Input() showContactInfo = false;
  email = 'info@cozentech.com';
  phone = '+1 (629) 274-2295';
  buttonLink = '/contact';
}