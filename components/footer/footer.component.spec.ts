/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainFooterComponent } from './footer.component';
import { COMPANY } from './../../../core/tests/util';

describe('FooterComponent', () => {
  let component: MainFooterComponent;
  let fixture: ComponentFixture<MainFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show app copy right', () => {
    component.app_fullname = 'ACME Inc.';
    fixture.detectChanges();

    const copyRightElem = fixture.debugElement.query(By.css('.app-copy-right'));

    expect(copyRightElem.nativeElement.textContent).toContain('ACME Inc.');
  });
});
