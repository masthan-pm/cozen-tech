import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule,
    CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  // TODO: 1.Need to change the our solutions dropdown design
  // TODO: 2. Scroll to top button is missing
  // TODO: 3. On scroll color of the header is not changing
  isOpen: boolean = false;
  toggleArrow() {
    this.isOpen = !this.isOpen;
  }
  navItems = [
    { label: 'Home', route: '/home' },
    { label: 'About Us', route: '/about' },
    {
      label: 'Our Solutions',
      isDropdown: true,
      submenu: [
        {
          label: 'Global Technology Solutions',
          route: 'solutions/global',
        },
        { label: 'Staffing and Recruitment', route: '/solutions/staffing' },
        {
          label: 'Finance and Accounting Services',
          route: '/solutions/finance',
        },
        { label: 'HR and Payroll Services', route: '/solutions/hr-payroll' },
        { label: 'Data Support', route: '/solutions/data-support' },
        { label: 'Mortgage Services', route: '/solutions/mortgage' },
        { label: 'Master Vendor Program', route: '/solutions/vendor-program' },
        { label: 'Training Programs', route: '/solutions/training' },
        { label: 'Technologies', route: '/solutions/technologies' },
      ],
    },
    { label: 'Careers', route: '/careers' },
    { label: 'Blog', route: '/blog' },
    { label: 'Clients', route: '/clients' },
    { label: 'Contact Us', route: '/contact' },
  ];
}
