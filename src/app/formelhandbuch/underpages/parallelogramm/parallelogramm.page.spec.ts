import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelogrammPage } from './parallelogramm.page';

describe('ParallelogrammPage', () => {
  let component: ParallelogrammPage;
  let fixture: ComponentFixture<ParallelogrammPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelogrammPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelogrammPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
