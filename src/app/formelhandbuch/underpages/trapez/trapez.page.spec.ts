import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezPage } from './trapez.page';

describe('TrapezPage', () => {
  let component: TrapezPage;
  let fixture: ComponentFixture<TrapezPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrapezPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
