/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WifiComponent } from './wifi.component';

describe('WifiComponent', () => {
  let component: WifiComponent;
  let fixture: ComponentFixture<WifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
