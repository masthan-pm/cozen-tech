import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule, MatIconModule],
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
      icon: 'public',
      image: 'assets/Global.png',
    },
    {
      title: 'Staffing and Recruitment',
      description: 'Expert talent acquisition and placement services',
      icon: 'group',
      image: 'assets/staffing.png',
    },
    {
      title: 'Finance and Accounting',
      description: 'Strategic financial management and accounting solutions',
      icon: 'attach_money',
      image: 'assets/finance.png',
    },
    {
      title: 'HR and Payroll Services',
      description: 'Streamlined human resources and payroll management',
      icon: 'manage_accounts',
      image: 'assets/HR.png',
    },
    {
      title: 'Data Support',
      description: 'Comprehensive data management and analytics services',
      icon: 'storage',
      image: 'assets/data.png',
    },
    {
      title: 'Mortgage Services',
      description: 'End-to-end mortgage processing and support',
      icon: 'home',
      image: 'assets/Mortgage.png',
    },
    {
      title: 'Master Vendor Program',
      description: 'Centralized vendor management solutions',
      icon: 'business_center',
      image: 'assets/master.png',
    },
    {
      title: 'Training Programs',
      description: 'Professional development and skill enhancement',
      icon: 'school',
      image: 'assets/training.png',
    },
  ];
}
