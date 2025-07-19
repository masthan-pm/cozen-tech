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
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../directives/scroll-reveal.directive';
import { BlogService } from './blog.service';
import { BlogPost } from '../../shared/interfaces/solutions.interface';
import { HeroComponent } from '../../shared/hero/hero.component';
import { BLOG_CONSTANTS } from '../../../constants/blog.constants';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeroComponent,
    ScrollAnimationDirective,
    ScrollRevealDirective,
  ],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  constructor(private blogService: BlogService) {}

  blog = BLOG_CONSTANTS.HERO;
  categories = BLOG_CONSTANTS.CATEGORIES;
  blogPosts = BLOG_CONSTANTS.BLOG_POSTS;
  newsletter = BLOG_CONSTANTS.NEWSLETTER;

  searchTerm: string = '';
  selectedCategory: string = 'all';
  hoveredCard: number | null = null;

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

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

  onCardHover(index: number, isHovered: boolean): void {
    this.hoveredCard = isHovered ? index : null;
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
