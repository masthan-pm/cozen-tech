import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ValuesComponent } from './values/values.component';
import { TeamsComponent } from './teams/teams.component';

@Component({
  selector: 'app-about',
  imports: [MainComponent, ValuesComponent, TeamsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
