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
  // TODO: 1.Add the company name
  // TODO: 2.Add space between header and welcome text
  // TODO: 3.Redesign needed for the welcome section
  companyName = 'Cozen Technology Solutions';
  yearsFounded = new Date().getFullYear() - 2004; // Assuming founded in 2004
}
