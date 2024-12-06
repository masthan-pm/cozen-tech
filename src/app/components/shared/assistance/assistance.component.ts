import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../shared/interfaces/solutions.interface';

@Component({
  selector: 'app-assistance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assistance.component.html',
  styleUrl: './assistance.component.scss',
})
export class AssistanceComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() services: Service[] = [];
}
