import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansHourlyComponent } from './plans-hourly.component';

describe('PlansHourlyComponent', () => {
  let component: PlansHourlyComponent;
  let fixture: ComponentFixture<PlansHourlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansHourlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
