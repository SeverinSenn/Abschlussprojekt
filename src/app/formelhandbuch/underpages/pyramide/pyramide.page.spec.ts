import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidePage } from './pyramide.page';

describe('PyramidePage', () => {
  let component: PyramidePage;
  let fixture: ComponentFixture<PyramidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyramidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyramidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
