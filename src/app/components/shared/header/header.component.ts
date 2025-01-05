import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface SubMenuItem {
  label: string;
  route: string;
  icon?: string;
  description?: string;
}

interface NavItem {
  label: string;
  route?: string;
  isDropdown?: boolean;
  submenu?: SubMenuItem[];
}

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
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  isOpen: boolean = false;
  isMobileMenuOpen: boolean = false;
  menuCloseTimer: any;

  toggleArrow() {
    this.isOpen = !this.isOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  openMenu() {
    this.menuTrigger.openMenu();
    this.isOpen = true;
    if (this.menuCloseTimer) {
      clearTimeout(this.menuCloseTimer);
    }
  }

  startCloseTimer() {
    this.menuCloseTimer = setTimeout(() => {
      this.menuTrigger.closeMenu();
      this.isOpen = false;
    }, 100);
  }

  cancelCloseTimer() {
    if (this.menuCloseTimer) {
      clearTimeout(this.menuCloseTimer);
    }
  }

  navItems: NavItem[] = [
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
        { label: 'Master Vendor Program', route: '/solutions/master-vendor' },
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
