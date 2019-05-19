import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetraederPage } from './tetraeder.page';

describe('TetraederPage', () => {
  let component: TetraederPage;
  let fixture: ComponentFixture<TetraederPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetraederPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetraederPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
