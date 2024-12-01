import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { BlogService } from './blog.service';
import {
  BlogPost,
  HeroContent,
} from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeroComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private blogService: BlogService) {}
  blog: HeroContent = {
    header: 'Blog & Insights',
    text: 'Stay updated with the latest in technology, industry trends, and company news',
    image: '/assets/pages/blog/blog.jpg',
  };
  searchTerm: string = '';
  selectedCategory: string = 'all';

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  categories: string[] = [
    'All',
    'Technology',
    'Industry Insights',
    'Career Tips',
    'Company News',
    'Development',
    'Recruitment',
  ];

  blogPosts: BlogPost[] = [
    {
      title: 'The Future of Remote Work in Tech',
      category: 'Industry Insights',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'assets/pages/blog/blog-img1.jpg',
      excerpt:
        'Explore how remote work is reshaping the technology industry and what it means for companies and employees.',
      tags: ['Remote Work', 'Technology', 'Future of Work'],
    },
    {
      title: 'Building Scalable Microservices Architecture',
      category: 'Development',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '8 min read',
      image: 'assets/pages/blog/blog-img2.jpg',
      excerpt:
        'Learn best practices for designing and implementing scalable microservices architecture for enterprise applications.',
      tags: ['Microservices', 'Architecture', 'Development'],
    },
    {
      title: 'Top Skills for Tech Professionals in 2024',
      category: 'Career Tips',
      author: 'Emily Rodriguez',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'assets/pages/blog/blog-img3.jpg',
      excerpt:
        "Discover the most in-demand skills that tech professionals need to stay competitive in today's job market.",
      tags: ['Career Growth', 'Skills', 'Technology'],
    },
    {
      title: 'AI in Recruitment: Transforming Talent Acquisition',
      category: 'Recruitment',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '7 min read',
      image: 'assets/pages/blog/blog-img4.jpg',
      excerpt:
        'How artificial intelligence is revolutionizing the recruitment process and improving candidate matching.',
      tags: ['AI', 'Recruitment', 'HR Tech'],
    },
    {
      title: 'Cloud Security Best Practices',
      category: 'Technology',
      author: 'Alex Thompson',
      date: 'March 5, 2024',
      readTime: '10 min read',
      image: 'assets/pages/blog/blog-img5.jpg',
      excerpt:
        'Essential security practices for protecting your cloud infrastructure and applications.',
      tags: ['Cloud', 'Security', 'Best Practices'],
    },
    {
      title: 'Cozen Tech Expands to Asia Pacific',
      category: 'Company News',
      author: 'Lisa Wong',
      date: 'March 1, 2024',
      readTime: '4 min read',
      image: 'assets/pages/blog/blog-img6.jpg',
      excerpt:
        'Exciting news about our expansion into the Asia Pacific market and what it means for our clients.',
      tags: ['Company News', 'Growth', 'Global'],
    },
  ];

  get filteredPosts() {
    return this.blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        this.selectedCategory.toLowerCase() === 'all' ||
        post.category.toLowerCase() === this.selectedCategory.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }

  submitForm() {
    console.log(this.emailForm.value.email);
    const data = {
      email: this.emailForm.value.email,
    };

    this.blogService.postData(data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
