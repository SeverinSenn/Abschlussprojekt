import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KugelPage } from './kugel.page';

describe('KugelPage', () => {
  let component: KugelPage;
  let fixture: ComponentFixture<KugelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KugelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KugelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
