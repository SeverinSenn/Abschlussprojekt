import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthPage } from './length.page';

describe('LengthPage', () => {
  let component: LengthPage;
  let fixture: ComponentFixture<LengthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LengthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
