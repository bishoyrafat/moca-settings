import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansDayComponent } from './plans-day.component';

describe('PlansDayComponent', () => {
  let component: PlansDayComponent;
  let fixture: ComponentFixture<PlansDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
