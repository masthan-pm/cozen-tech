import { Routes } from '@angular/router';
import { SolutionsComponent } from './components/main/solutions/solutions.component';
import { WelcomeComponent } from './components/main/welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: WelcomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: '**', redirectTo: '/home' },
];
