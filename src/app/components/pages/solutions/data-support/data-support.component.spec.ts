import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSupportComponent } from './data-support.component';

describe('DataSupportComponent', () => {
  let component: DataSupportComponent;
  let fixture: ComponentFixture<DataSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSupportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
