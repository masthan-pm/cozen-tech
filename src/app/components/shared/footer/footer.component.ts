import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  companyInfo = {
    name: 'Cozen Tech',
    description:
      'Empowering businesses through innovative IT solutions and talent acquisition.',
    icon: 'business',
  };

  quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Our Solutions', path: '/solutions' },
    { title: 'Careers', path: '/careers' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];

  contactInfo = {
    email: {
      icon: 'email',
      value: 'info@cozentech.com',
      href: 'mailto:info@cozentech.com',
    },
    phone: {
      icon: 'phone',
      value: '(123) 456-7890',
      href: 'tel:+1234567890',
    },
    address: {
      icon: 'location_on',
      lines: ['123 Tech Street,', 'Silicon Valley, CA 94025'],
    },
  };

  socialLinks = [
    { name: 'LinkedIn', icon: 'facebook', href: '#' },
    { name: 'Twitter', icon: 'facebook', href: '#' },
    { name: 'Facebook', icon: 'facebook', href: '#' },
    { name: 'Instagram', icon: 'facebook', href: '#' },
  ];

  footerCopyright = 'Cozen Technology Solutions. All rights reserved.';
}
