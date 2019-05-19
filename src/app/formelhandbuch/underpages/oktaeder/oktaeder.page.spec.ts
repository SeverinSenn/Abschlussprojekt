import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OktaederPage } from './oktaeder.page';

describe('OktaederPage', () => {
  let component: OktaederPage;
  let fixture: ComponentFixture<OktaederPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OktaederPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OktaederPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
