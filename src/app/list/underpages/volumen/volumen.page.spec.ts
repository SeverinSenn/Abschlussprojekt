import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumenPage } from './volumen.page';

describe('VolumenPage', () => {
  let component: VolumenPage;
  let fixture: ComponentFixture<VolumenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
