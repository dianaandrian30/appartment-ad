import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentDescriptionItemComponent } from './apartment-description-item.component';

describe('ApartmentDescriptionItemComponent', () => {
  let component: ApartmentDescriptionItemComponent;
  let fixture: ComponentFixture<ApartmentDescriptionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentDescriptionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentDescriptionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
