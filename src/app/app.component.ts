import { Component } from '@angular/core';
import { HeaderComponent } from './components/shared/header/header.component';
import { WelcomeComponent } from './components/main/welcome/welcome.component';
import { SolutionsComponent } from './components/main/solutions/solutions.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    WelcomeComponent,
    SolutionsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'cozen-tech';
}
