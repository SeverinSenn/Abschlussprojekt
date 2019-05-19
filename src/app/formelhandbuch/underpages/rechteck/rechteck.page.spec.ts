import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechteckPage } from './rechteck.page';

describe('RechteckPage', () => {
  let component: RechteckPage;
  let fixture: ComponentFixture<RechteckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechteckPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechteckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
