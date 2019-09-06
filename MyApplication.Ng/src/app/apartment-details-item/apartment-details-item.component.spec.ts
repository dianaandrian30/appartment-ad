import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDetailsItemComponent } from './apartment-details-item.component';

describe('ApartmentDetailsItemComponent', () => {
  let component: ApartmentDetailsItemComponent;
  let fixture: ComponentFixture<ApartmentDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
