import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCTAComponent } from './solution-cta.component';

describe('SolutionCTAComponent', () => {
  let component: SolutionCTAComponent;
  let fixture: ComponentFixture<SolutionCTAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolutionCTAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});