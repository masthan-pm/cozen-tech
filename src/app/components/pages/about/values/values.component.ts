import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VALUE_CONSTANTS } from '../../../../constants/about/values.constants';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent {
  header = VALUE_CONSTANTS.HEADER;
  content = VALUE_CONSTANTS.CONTENT;
  values: Value[] = VALUE_CONSTANTS.VALUES;
}
