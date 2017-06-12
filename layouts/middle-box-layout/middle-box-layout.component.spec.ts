/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { IMPORTS } from './../../utils';
import { COMPANY } from './../../../core/tests/util';
import * as fromRoot from './../../../reducers';

import { MiddleBoxLayoutComponent } from './middle-box-layout.component';

describe('MiddleBoxLayoutComponent', () => {
  let component: MiddleBoxLayoutComponent;
  let fixture: ComponentFixture<MiddleBoxLayoutComponent>;
  let store: Store<fromRoot.State>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBoxLayoutComponent ],
      imports: [...IMPORTS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBoxLayoutComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should show the App name on page header', () => {
    component.ngOnInit();
    component.app_fullname = "ACME Inc.";
    component.app_short_name = "ACME";

    fixture.detectChanges();
    
    let appNameElem = fixture.debugElement.query(By.css('div.login-logo'));

    expect(appNameElem.nativeElement.textContent).toContain("ACME");
  });

});
