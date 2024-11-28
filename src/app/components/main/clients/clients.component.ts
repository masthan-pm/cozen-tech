import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Client {
  name: string;
  logo: string;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent {
  clients: Client[] = [
    { name: 'TechCorp', logo: 'assets/flutter.jpg' },
    { name: 'InnovateSoft', logo: 'assets/entity.jpg' },
    { name: 'DataFlow', logo: 'assets/net.jpg' },
    { name: 'CloudNet', logo: 'assets/nhibernate.jpg' },
    { name: 'SecureIT', logo: 'assets/tech_corp.jpeg' },
    { name: 'DevPro', logo: 'assets/asp.jpg' },
  ];
}
