import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() features: Array<{
    category: string;
    items: string[];
  }> = [];
}
