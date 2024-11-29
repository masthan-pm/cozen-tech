import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}

interface Benefit {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss'],
})
export class CareersComponent {
  expandedJob: number | null = null;
  searchTerm: string = '';
  selectedLocation: string = 'all';
  selectedDepartment: string = 'all';

  locations: string[] = [
    'San Francisco, CA',
    'New York, NY',
    'Austin, TX',
    'Remote',
  ];
  departments: string[] = ['Engineering', 'HR', 'Product'];

  jobs: Job[] = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120K - $180K',
      description:
        'We are seeking an experienced Full Stack Developer to join our engineering team. The ideal candidate will have strong expertise in React, Node.js, and cloud technologies.',
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        '5+ years of experience in full-stack development',
        'Strong proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS/Azure/GCP)',
        'Excellent problem-solving and communication skills',
      ],
    },
    {
      title: 'Technical Recruiter',
      department: 'HR',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$70K - $100K',
      description:
        "Join our talent acquisition team to help identify and recruit top tech talent. You'll work closely with hiring managers and candidates throughout the recruitment process.",
      requirements: [
        "Bachelor's degree in HR or related field",
        '3+ years of technical recruiting experience',
        'Strong understanding of technical roles and requirements',
        'Excellent networking and communication skills',
        'Experience with ATS and recruitment tools',
      ],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$90K - $130K',
      description:
        'Lead the development and execution of product strategies that align with our company vision and market needs.',
      requirements: [
        "Bachelor's degree in Business or related field",
        '4+ years of product management experience',
        'Strong analytical and problem-solving skills',
        'Excellent communication and leadership abilities',
        'Experience with Agile methodologies',
      ],
    },
  ];

  benefits: Benefit[] = [
    {
      title: 'Health & Wellness',
      description:
        'Comprehensive medical, dental, and vision coverage for you and your family.',
      image:
        'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80',
    },
    {
      title: 'Growth & Development',
      description:
        'Continuous learning opportunities, mentorship programs, and career advancement.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80',
    },
    {
      title: 'Work-Life Balance',
      description:
        'Flexible work arrangements, paid time off, and remote work options.',
      image:
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80',
    },
  ];

  toggleJob(index: number) {
    this.expandedJob = this.expandedJob === index ? null : index;
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
