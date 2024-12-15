import { Component, Input } from '@angular/core';
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
  @Input() header: string = 'Trusted by Industry Leaders';
  @Input() content: string =
    'We work with forward-thinking companies across various industries, helping them achieve their technology and talent goals.';

  clients: Client[] = [
    {
      name: 'AWS',
      logo: 'assets/shared/clients/trusted/home/aws.jpg',
    },
    {
      name: 'Azure',
      logo: 'assets/shared/clients/trusted/home/azure.jpg',
    },
    {
      name: 'DigitalOcean',
      logo: 'assets/shared/clients/trusted/home/digital.jpg',
    },
    {
      name: 'iOS',
      logo: 'assets/shared/clients/trusted/home/ios.jpg',
    },
    {
      name: 'Redis',
      logo: 'assets/shared/clients/trusted/home/redis.jpg',
    },
    {
      name: 'SQL',
      logo: 'assets/shared/clients/trusted/home/sql.jpg',
    },
  ];
}
