import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakePage } from './snake.page';

describe('SnakePage', () => {
  let component: SnakePage;
  let fixture: ComponentFixture<SnakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
