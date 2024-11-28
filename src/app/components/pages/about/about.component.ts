import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-about',
  imports: [MainComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
