import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerNavWithoutRoutingComponent } from './inner-nav-without-routing.component';

describe('InnerNavWithoutRoutingComponent', () => {
  let component: InnerNavWithoutRoutingComponent;
  let fixture: ComponentFixture<InnerNavWithoutRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerNavWithoutRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerNavWithoutRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
