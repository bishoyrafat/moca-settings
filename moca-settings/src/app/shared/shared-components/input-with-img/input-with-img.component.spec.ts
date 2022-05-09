import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithImgComponent } from './input-with-img.component';

describe('InputWithImgComponent', () => {
  let component: InputWithImgComponent;
  let fixture: ComponentFixture<InputWithImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
