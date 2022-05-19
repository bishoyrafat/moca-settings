/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TailoredComponent } from './tailored.component';

describe('TailoredComponent', () => {
  let component: TailoredComponent;
  let fixture: ComponentFixture<TailoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
