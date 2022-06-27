import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansNavbarComponent } from './plans-navbar.component';

describe('PlansNavbarComponent', () => {
  let component: PlansNavbarComponent;
  let fixture: ComponentFixture<PlansNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
