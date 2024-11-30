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
  email = 'info@cozentech.com';
  quickLinks = [
    { title: 'About Us', path: '/about' },
    { title: 'Our Solutions', path: '/solutions' },
    { title: 'Careers', path: '/careers' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
  ];
  socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
  ];
}
