import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormelhandbuchPage } from './formelhandbuch.page';

describe('FormelhandbuchPage', () => {
  let component: FormelhandbuchPage;
  let fixture: ComponentFixture<FormelhandbuchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormelhandbuchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormelhandbuchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
