import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CLIENTS_CONSTANTS } from '../../../constants/home/clients.constants';

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
  @Input() header: string = CLIENTS_CONSTANTS.HEADER;
  @Input() content: string = CLIENTS_CONSTANTS.CONTENT;

  clients: Client[] = CLIENTS_CONSTANTS.CLIENTS;
}
