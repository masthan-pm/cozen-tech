import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  solutions = [
    // TODO: 1.Add links to the solutions
    // TODO: 2.Add Icons to the solutions
    // TODO: 3.Add images to the solutions
    // TODO: 4.Need to have only 3 cards in the grid
    {
      title: 'Global Technology Solutions',
      description: 'Comprehensive IT solutions tailored for global enterprises',
      icon: 'globe',
      image: 'assets/Global.png',
    },
    {
      title: 'Staffing and Recruitment',
      description: 'Expert talent acquisition and placement services',
      icon: 'people',
      image: 'assets/staffing.png',
    },
    {
      title: 'Finance and Accounting',
      description: 'Strategic financial management and accounting solutions',
      icon: 'currency-dollar',
      image: 'assets/finance.png',
    },
    {
      title: 'HR and Payroll Services',
      description: 'Streamlined human resources and payroll management',
      icon: 'UserCog',
      image: 'assets/HR.png',
    },
    {
      title: 'Data Support',
      description: 'Comprehensive data management and analytics services',
      icon: 'Database',
      image: 'assets/data.png',
    },
    {
      title: 'Mortgage Services',
      description: 'End-to-end mortgage processing and support',
      icon: 'Home',
      image: 'assets/Mortgage.png',
    },
    {
      title: 'Master Vendor Program',
      description: 'Centralized vendor management solutions',
      icon: 'Briefcase',
      image: 'assets/master.png',
    },
    {
      title: 'Training Programs',
      description: 'Professional development and skill enhancement',
      icon: 'GraduationCap',
      image: 'assets/training.png',
    },
  ];
}
