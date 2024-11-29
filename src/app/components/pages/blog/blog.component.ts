import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface BlogPost {
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  searchTerm: string = '';
  selectedCategory: string = 'all';

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
      image:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80',
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
      image:
        'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80',
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
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
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
      image:
        'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80',
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
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
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
      image:
        'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&q=80',
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
}
