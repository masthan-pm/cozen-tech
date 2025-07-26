import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './solution-cta.component.html',
  styleUrls: ['./solution-cta.component.scss']
})
export class SolutionCTAComponent {
  @Input() header: string = 'Ready to Transform Your Business?';
  @Input() text: string = "Let's discuss how our solutions can help you achieve your business goals.";
  @Input() primaryButtonText: string = 'Get Started Today';
  @Input() secondaryButtonText: string = 'Schedule Consultation';
  @Input() solutionType: string = 'technology';
  @Input() showContactInfo: boolean = true;

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
    chat: {
      icon: 'chat',
      value: 'Live Chat Available',
      href: '#',
    },
  };

  getSolutionIcon(): string {
    const icons: { [key: string]: string } = {
      'global': 'public',
      'staffing': 'group',
      'finance': 'attach_money',
      'hr': 'security',
      'data': 'storage',
      'mortgage': 'home',
      'vendor': 'business_center',
      'training': 'school',
      'technology': 'code'
    };
    return icons[this.solutionType] || 'star';
  }
}