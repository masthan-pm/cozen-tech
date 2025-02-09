import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ClickOutsideDirective } from './click-outside.directive';
import { BlogService } from '../blog/blog.service';
import { Country } from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CONTACT_CONSTANTS } from '../../../constants/contact.constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ClickOutsideDirective,
    FormsModule,
    HeroComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  constructor(private blogService: BlogService) {}

  constants = CONTACT_CONSTANTS;
  contact = this.constants.HERO;
  contactEmail = this.constants.CONTACT_EMAIL;
  countries = this.constants.COUNTRIES;
  offices = this.constants.OFFICES;
  selectedCountry = this.constants.DEFAULT_COUNTRY;

  isCountryDropdownOpen = false;
  formSubjects = CONTACT_CONSTANTS.FORM_SUBJECTS;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    companyName: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
    ]),
    phone: new FormControl(''),
    subject: new FormControl('', Validators.required),
    message: new FormControl(''),
  });

  get nameControl() {
    return this.contactForm.get('name');
  }

  get emailControl() {
    return this.contactForm.get('email');
  }

  get subjectControl() {
    return this.contactForm.get('subject');
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (!control) return '';

    if (control.hasError('required')) {
      return `${
        controlName.charAt(0).toUpperCase() + controlName.slice(1)
      } is required`;
    }

    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }

    if (control.hasError('pattern')) {
      if (controlName === 'email') {
        return 'Please enter a valid email address';
      }
    }

    return '';
  }

  shouldShowError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  toggleCountryDropdown() {
    this.isCountryDropdownOpen = !this.isCountryDropdownOpen;
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.isCountryDropdownOpen = false;
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      const data = {
        ...this.contactForm.value,
        country: this.selectedCountry.name,
      };
      this.blogService.postData(data).subscribe({
        next: (res) => {
          console.log(res);
        },
      });
      this.contactForm.reset();
    }
  }
}
