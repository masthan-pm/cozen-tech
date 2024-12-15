import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company-overview',
  imports: [RouterModule],
  templateUrl: './company-overview.component.html',
  styleUrl: './company-overview.component.scss',
})
export class CompanyOverviewComponent {
  about = {
    header: 'About Our Company',
    content: {
      p1: 'Cozen Technology Solutions is a leading provider of IT services and talent solutions, helping businesses navigate the digital landscape since 2010. We combine technical expertise with deep industry knowledge to deliver innovative solutions that drive business growth and success.',
      p2: 'Our team of experts specializes in connecting top talent with innovative companies, providing end-to-end technology solutions, and ensuring seamless digital transformation.',
    },
    linkText: 'Read More',
    image: '/assets/pages/home/about-company.jpg',
  };
}
