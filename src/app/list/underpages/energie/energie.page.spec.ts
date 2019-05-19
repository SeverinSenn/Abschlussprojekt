import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiePage } from './energie.page';

describe('EnergiePage', () => {
  let component: EnergiePage;
  let fixture: ComponentFixture<EnergiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
