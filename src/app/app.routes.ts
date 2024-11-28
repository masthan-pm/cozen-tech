import { Routes } from '@angular/router';
import { SolutionsComponent } from './components/main/solutions/solutions.component';
import { WelcomeComponent } from './components/main/welcome/welcome.component';
import { AboutComponent } from './components/pages/about/about.component';
import { GlobalComponent } from './components/pages/our-solutions/global/global.component';
import { StaffingComponent } from './components/pages/our-solutions/staffing/staffing.component';

export const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: WelcomeComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'solutions/global', component: GlobalComponent },
  { path: 'solutions/staffing', component: StaffingComponent },
  { path: '**', redirectTo: '/home' },
];
