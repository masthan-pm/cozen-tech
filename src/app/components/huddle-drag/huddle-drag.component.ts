import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-huddle-drag',
  imports: [CdkDrag, CdkDropList, CommonModule],
  templateUrl: './huddle-drag.component.html',
  styleUrl: './huddle-drag.component.scss',
})
export class HuddleDragComponent {
  items = [
    'First Item',
    'Second Item',
    'Third Item',
    'Fourth Item',
    'Fifth Item',
  ];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
