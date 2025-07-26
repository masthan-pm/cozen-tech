import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechCategory {
  name: string;
  technologies: string[];
  icon: string;
  color: string;
}

@Component({
  selector: 'app-tech-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-showcase.component.html',
  styleUrls: ['./tech-showcase.component.scss']
})
export class TechShowcaseComponent implements OnInit, OnDestroy {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() technologies: string[] = [];
  @Input() categories: TechCategory[] = [];

  selectedCategory: number = 0;
  private rotationInterval?: number;

  ngOnInit() {
    if (this.categories.length > 0) {
      this.startAutoRotation();
    }
  }

  ngOnDestroy() {
    this.stopAutoRotation();
  }

  private startAutoRotation() {
    this.rotationInterval = window.setInterval(() => {
      this.selectedCategory = (this.selectedCategory + 1) % this.categories.length;
    }, 3000);
  }

  private stopAutoRotation() {
    if (this.rotationInterval) {
      clearInterval(this.rotationInterval);
    }
  }

  selectCategory(index: number) {
    this.selectedCategory = index;
    this.stopAutoRotation();
    
    // Restart auto rotation after user interaction
    setTimeout(() => {
      this.startAutoRotation();
    }, 5000);
  }

  getOrbitPosition(index: number, total: number) {
    const angle = (360 / total) * index;
    const radius = 150;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  }
}