import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassPage } from './mass.page';

describe('MassPage', () => {
  let component: MassPage;
  let fixture: ComponentFixture<MassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
