import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhombusPage } from './rhombus.page';

describe('RhombusPage', () => {
  let component: RhombusPage;
  let fixture: ComponentFixture<RhombusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhombusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhombusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
