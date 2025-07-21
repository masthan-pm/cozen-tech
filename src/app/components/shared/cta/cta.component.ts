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
    "Let's discuss how we can help you achieve your business goals through our IT solutions and talent acquisition services.";
  @Input() buttonText = 'Get in Touch';
  @Input() showContactInfo = true;

  contactInfo = {
    email: {
      icon: 'email',
      value: 'info@cozentech.com',
      href: 'mailto:info@cozentech.com',
    },
    phone: {
      icon: 'phone',
      value: '+1 (629) 274-2295',
      href: 'tel:+16292742295',
    },
  };

  buttonLink = '/contact';
}