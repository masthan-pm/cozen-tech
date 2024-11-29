import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSolutionsComponent } from './solutions.component';

describe('OurSolutionsComponent', () => {
  let component: OurSolutionsComponent;
  let fixture: ComponentFixture<OurSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurSolutionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OurSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
