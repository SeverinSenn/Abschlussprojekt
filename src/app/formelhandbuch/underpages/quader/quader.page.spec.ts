import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaderPage } from './quader.page';

describe('QuaderPage', () => {
  let component: QuaderPage;
  let fixture: ComponentFixture<QuaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
