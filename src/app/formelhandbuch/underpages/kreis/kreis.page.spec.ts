import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KreisPage } from './kreis.page';

describe('KreisPage', () => {
  let component: KreisPage;
  let fixture: ComponentFixture<KreisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KreisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KreisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
