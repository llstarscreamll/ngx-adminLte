/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { MainSidebarComponent } from './main-sidebar.component';
import { IMPORTS } from './../../utils';
import { TEST_USER } from './../../../core/tests/util';
import * as fromRoot from './../../../reducers';
import * as authActions from './../../../auth/actions/auth.actions';
import { AUTH_TESTING_COMPONENTS } from 'app/auth/utils/auth-testing-utils';

describe('AdminLTE MainSidebarComponent', () => {
  let component: MainSidebarComponent;
  let fixture: ComponentFixture<MainSidebarComponent>;
  let store: Store<fromRoot.State>;
  const user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [...AUTH_TESTING_COMPONENTS, MainSidebarComponent],
      imports: [IMPORTS]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSidebarComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);
    component.user = user;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the user info on sidebar top area', () => {
    const userNameZone1 = fixture.debugElement.query(By.css('span.username')).nativeElement;
    expect(userNameZone1.textContent).toEqual(user.name);
  });

  it('should hide user area if user property is not set', () => {
    component.user = undefined;
    fixture.detectChanges();

    const userNameZoneWrapper = fixture.debugElement.query(By.css('div.user-panel'));
    expect(userNameZoneWrapper).toBeNull();
  });
});
