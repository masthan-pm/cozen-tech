import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Phase } from '../../shared/interfaces/solutions.interface';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss'],
})
export class ProcessComponent {
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() phases: Phase[] = [];
}
