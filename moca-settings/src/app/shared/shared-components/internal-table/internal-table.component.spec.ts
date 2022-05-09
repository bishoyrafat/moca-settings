import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalTableComponent } from './internal-table.component';

describe('InternalTableComponent', () => {
  let component: InternalTableComponent;
  let fixture: ComponentFixture<InternalTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
