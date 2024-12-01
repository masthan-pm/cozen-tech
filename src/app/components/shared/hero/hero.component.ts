import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  @Input() backgroundImage: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    const heroSection = this.el.nativeElement.querySelector('.hero-section');
    this.renderer.setStyle(
      heroSection,
      'background-image',
      `url(${this.backgroundImage})`
    );
  }
}
