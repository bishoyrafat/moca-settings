import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailoredComponent } from './tailored.component';

describe('TailoredComponent', () => {
  let component: TailoredComponent;
  let fixture: ComponentFixture<TailoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TailoredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TailoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
