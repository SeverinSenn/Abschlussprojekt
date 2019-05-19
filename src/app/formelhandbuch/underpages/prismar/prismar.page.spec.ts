import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismarPage } from './prismar.page';

describe('PrismarPage', () => {
  let component: PrismarPage;
  let fixture: ComponentFixture<PrismarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
