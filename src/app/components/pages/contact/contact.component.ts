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
    companyName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  toggleCountryDropdown() {
    this.isCountryDropdownOpen = !this.isCountryDropdownOpen;
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
    this.isCountryDropdownOpen = false;
  }

  onSubmit() {
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
