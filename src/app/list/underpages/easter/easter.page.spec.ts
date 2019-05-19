import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterPage } from './easter.page';

describe('EasterPage', () => {
  let component: EasterPage;
  let fixture: ComponentFixture<EasterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
