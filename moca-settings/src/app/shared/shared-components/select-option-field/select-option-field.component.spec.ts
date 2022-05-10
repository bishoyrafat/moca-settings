import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOptionFieldComponent } from './select-option-field.component';

describe('SelectOptionFieldComponent', () => {
  let component: SelectOptionFieldComponent;
  let fixture: ComponentFixture<SelectOptionFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOptionFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOptionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
