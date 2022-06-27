import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansBundleComponent } from './plans-bundle.component';

describe('PlansBundleComponent', () => {
  let component: PlansBundleComponent;
  let fixture: ComponentFixture<PlansBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansBundleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
