import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdApartmentComponent } from './ad-apartment.component';

describe('AdApartmentComponent', () => {
  let component: AdApartmentComponent;
  let fixture: ComponentFixture<AdApartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdApartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
