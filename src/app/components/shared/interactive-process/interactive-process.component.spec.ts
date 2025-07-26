import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveProcessComponent } from './interactive-process.component';

describe('InteractiveProcessComponent', () => {
  let component: InteractiveProcessComponent;
  let fixture: ComponentFixture<InteractiveProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});