import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DreieckPage } from './dreieck.page';

describe('DreieckPage', () => {
  let component: DreieckPage;
  let fixture: ComponentFixture<DreieckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DreieckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DreieckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
