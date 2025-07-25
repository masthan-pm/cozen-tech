import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VALUE_CONSTANTS } from '../../../../constants/about/values.constants';
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive';
import { ScrollRevealDirective } from '../../../../directives/scroll-reveal.directive';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, ScrollRevealDirective],
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.scss'],
})
export class ValuesComponent {
  header = VALUE_CONSTANTS.HEADER;
  content = VALUE_CONSTANTS.CONTENT;
  values: Value[] = VALUE_CONSTANTS.VALUES;
}
