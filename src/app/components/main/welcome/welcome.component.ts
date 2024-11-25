import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  companyName = 'Cozen Technology Solutions';
  yearsFounded = new Date().getFullYear() - 2004; // Assuming founded in 2004
}
