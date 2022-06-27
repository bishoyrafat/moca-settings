import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansTailoredComponent } from './plans-tailored.component';

describe('PlansTailoredComponent', () => {
  let component: PlansTailoredComponent;
  let fixture: ComponentFixture<PlansTailoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansTailoredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansTailoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
