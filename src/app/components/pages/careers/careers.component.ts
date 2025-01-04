import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeroComponent } from '../../shared/hero/hero.component';
import { CAREERS_CONSTANTS } from '../../../constants/careers.constants';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HeroComponent],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent {
  expandedJob: number | null = null;
  searchTerm: string = '';
  selectedLocation: string = 'all';
  selectedDepartment: string = 'all';

  careers = CAREERS_CONSTANTS.HERO;
  locations = CAREERS_CONSTANTS.LOCATIONS;
  departments = CAREERS_CONSTANTS.DEPARTMENTS;
  jobs = CAREERS_CONSTANTS.JOBS;
  benefits = CAREERS_CONSTANTS.BENEFITS;
  benefitsHeading = CAREERS_CONSTANTS.BENEFITS_HEADING;

  toggleJob(index: number | null) {
    this.expandedJob = index;
  }

  get filteredJobs() {
    return this.jobs.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchesLocation =
        this.selectedLocation === 'all' ||
        job.location.includes(this.selectedLocation);
      const matchesDepartment =
        this.selectedDepartment === 'all' ||
        job.department === this.selectedDepartment;
      return matchesSearch && matchesLocation && matchesDepartment;
    });
  }
}
