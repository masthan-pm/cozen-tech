import { Component } from '@angular/core';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ScrollToTopComponent } from './components/shared/scroll-to-top/scroll-to-top.component';
import { ScrollProgressComponent } from './components/shared/scroll-progress/scroll-progress.component';
import { RouterModule } from '@angular/router';
import { SmoothScrollService } from './services/smooth-scroll.service';

@Component({
  selector: 'app-root',
  imports: [RouterModule, HeaderComponent, FooterComponent, ScrollToTopComponent, ScrollProgressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'cozen-tech';

  constructor(private smoothScrollService: SmoothScrollService) {}
}
