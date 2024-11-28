import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ValuesComponent } from './values/values.component';

@Component({
  selector: 'app-about',
  imports: [MainComponent, ValuesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
