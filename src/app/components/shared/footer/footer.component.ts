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
      lines: ['2615 Medical Center Parkway, Suite 1560, Murfreesboro, Tennessee, 37129, United States of America'],
      href: 'https://www.google.com/maps/place/60+E+65th+St,+New+York,+NY+10065,+USA/@40.7668404,-73.967226,634m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89c258ee9543e153:0x7033d7ee09ded9c9!8m2!3d40.7668404!4d-73.967226!16s%2Fg%2F11q84vqb3z?entry=ttu&g_ep=EgoyMDI1MDcxNi4wIKXMDSoASAFQAw%3D%3D'
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

  subscribeNewsletter(email: string) {
    if (email && email.includes('@')) {
      console.log('Newsletter subscription:', email);
      // Add newsletter subscription logic here
    }
  }
}
