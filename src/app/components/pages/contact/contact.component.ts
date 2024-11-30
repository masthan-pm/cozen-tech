import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';

interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

interface FormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ClickOutsideDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactEmail = 'info@cozentech.com';
  offices: Office[] = [
    {
      city: 'San Francisco',
      address: '123 Tech Street, San Francisco, CA 94105',
      phone: '+1 (415) 555-0123',
      email: 'sf@cozentech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
    },
    {
      city: 'New York',
      address: '456 Madison Avenue, New York, NY 10022',
      phone: '+1 (212) 555-0123',
      email: 'ny@cozentech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
    },
    {
      city: 'London',
      address: '789 Tech Hub, London EC2A 4NE, UK',
      phone: '+44 20 7123 4567',
      email: 'uk@cozentech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
    },
  ];

  countries: Country[] = [
    { name: 'United States', code: 'US', dialCode: '+1', flag: 'US' },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: 'GB' },
    { name: 'Canada', code: 'CA', dialCode: '+1', flag: 'CA' },
    { name: 'Australia', code: 'AU', dialCode: '+61', flag: 'AU' },
    { name: 'Germany', code: 'DE', dialCode: '+49', flag: 'DE' },
    { name: 'France', code: 'FR', dialCode: '+33', flag: 'FR' },
    { name: 'India', code: 'IN', dialCode: '+91', flag: 'IN' },
    { name: 'Japan', code: 'JP', dialCode: '+81', flag: 'JP' },
    { name: 'China', code: 'CN', dialCode: '+86', flag: 'CN' },
    { name: 'Brazil', code: 'BR', dialCode: '+55', flag: 'BR' },
    { name: 'Mexico', code: 'MX', dialCode: '+52', flag: 'MX' },
    { name: 'Spain', code: 'ES', dialCode: '+34', flag: 'ES' },
    { name: 'Italy', code: 'IT', dialCode: '+39', flag: 'IT' },
    { name: 'Netherlands', code: 'NL', dialCode: '+31', flag: 'NL' },
    { name: 'Singapore', code: 'SG', dialCode: '+65', flag: 'SG' },
  ];

  formData: FormData = {
    name: '',
    companyName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  selectedCountry: Country = this.countries[0];
  isCountryDropdownOpen = false;

  onSubmit() {
    console.log('Form submitted:', {
      ...this.formData,
      country: this.selectedCountry,
    });
    // Here you would typically send the form data to your backend

    this.formData = {
      name: '',
      companyName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.isCountryDropdownOpen = false;
  }

  toggleCountryDropdown() {
    this.isCountryDropdownOpen = !this.isCountryDropdownOpen;
  }

  closeCountryDropdown() {
    this.isCountryDropdownOpen = false;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    return phoneRegex.test(phone);
  }

  validateForm(): boolean {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return false;
    }
    if (!this.validateEmail(this.formData.email)) {
      return false;
    }
    if (this.formData.phone && !this.validatePhone(this.formData.phone)) {
      return false;
    }
    return true;
  }
}
