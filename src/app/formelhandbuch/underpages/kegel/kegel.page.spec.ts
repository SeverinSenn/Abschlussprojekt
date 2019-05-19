import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegelPage } from './kegel.page';

describe('KegelPage', () => {
  let component: KegelPage;
  let fixture: ComponentFixture<KegelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
