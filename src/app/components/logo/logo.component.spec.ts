/*
 * Copyright (c) Markus Schmidgall 2021
 * Portfolio Projekt um Angular von Grund auf zu lernen
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LogoComponent} from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
