import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddleDragComponent } from './huddle-drag.component';

describe('HuddleDragComponent', () => {
  let component: HuddleDragComponent;
  let fixture: ComponentFixture<HuddleDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HuddleDragComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuddleDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
