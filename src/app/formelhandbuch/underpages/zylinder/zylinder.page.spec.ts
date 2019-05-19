import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZylinderPage } from './zylinder.page';

describe('ZylinderPage', () => {
  let component: ZylinderPage;
  let fixture: ComponentFixture<ZylinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZylinderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZylinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
