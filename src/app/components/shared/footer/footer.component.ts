import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  companyInfo = {
    name: 'Cozen Tech',
    description:
      'Empowering businesses through innovative IT solutions and talent acquisition. We bridge the gap between exceptional talent and cutting-edge technology.',
    icon: 'business',
  };

  quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Our Solutions', path: '/solutions' },
    { title: 'Careers', path: '/careers' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  serviceLinks = [
    { title: 'Global Technology', path: '/solutions/global', icon: 'public' },
    { title: 'Staffing Solutions', path: '/solutions/staffing', icon: 'group' },
    { title: 'Data Support', path: '/solutions/data-support', icon: 'storage' },
    { title: 'HR & Payroll', path: '/solutions/hr-payroll', icon: 'security' },
    { title: 'Training Programs', path: '/solutions/training', icon: 'school' },
  ];
  contactInfo = {
    email: {
      icon: 'email',
      value: 'info@cozentech.com',
      href: 'mailto:info@cozentech.com',
    },
    phone: {
      icon: 'phone',
      value: '(629) 274-2295',
      href: 'tel:+16292742295',
    },
    address: {
      icon: 'location_on',
      lines: ['123 Tech Street,', 'Silicon Valley, CA 94025'],
    },
  };

  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      href: 'https://www.linkedin.com/company/cozentech/',
    },
    {
      name: 'Youtube',
      icon: 'youtube',
      href: 'https://www.youtube.com/@Cozentech',
    },
    {
      name: 'Facebook',
      icon: 'facebook',
      href: 'https://www.facebook.com/cozentech',
    },
    {
      name: 'Instagram',
      icon: 'instagram',
      href: 'https://www.instagram.com/cozentechinc/',
    },
  ];

  footerCopyright = 'Cozen Technology Solutions. All rights reserved.';
}
  subscribeNewsletter(email: string) {
    if (email && email.includes('@')) {
      console.log('Newsletter subscription:', email);
      // Add newsletter subscription logic here
    }
  }
