/* tslint:disable:no-unused-variable */
import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Store } from '@ngrx/store';

import { NavTopLayoutComponent } from './nav-top-layout.component';
import { MainFooterComponent } from './../../components/footer/footer.component';
import { UserAccountMenuComponent } from './../../components/user-account-menu/user-account-menu.component';
import { IMPORTS } from './../../utils';
import { TEST_USER, COMPANY } from './../../../core/tests/util';
import * as fromRoot from './../../../reducers';

import * as authActions from './../../../auth/actions/auth.actions';

describe('AdminLTE NavTopLayoutComponent', () => {
  let component: NavTopLayoutComponent;
  let fixture: ComponentFixture<NavTopLayoutComponent>;
  let store: Store<fromRoot.State>;
  let user = TEST_USER;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainFooterComponent, NavTopLayoutComponent, UserAccountMenuComponent],
      imports: [IMPORTS]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NavTopLayoutComponent);
    component = fixture.componentInstance;
    store = fixture.debugElement.injector.get(Store);

    fixture.detectChanges();
  }));

  it('should hide/show user menu', fakeAsync(() => {
    // let's begin with the TEST_USER logged in
    store.dispatch(new authActions.LoginSuccessAction(user));
    let userMenuSelector = 'app-user-menu';
    let userMenu;
    
    component.ngOnInit();
    fixture.detectChanges();
    tick();

    userMenu = fixture.debugElement.query(By.css(userMenuSelector));
    expect(userMenu).not.toBeNull();

    // now the TEST_USER should be logged out, the user drop down should be
    // hide and the login and register links should appear
    store.dispatch(new authActions.LogoutSuccessAction(null));
    component.ngOnInit();
    fixture.detectChanges();
    tick();

    userMenu = fixture.debugElement.query(By.css(userMenuSelector));
    expect(userMenu).toBeNull();

    let loginLink = fixture.debugElement.query(By.css('a.login-link'));
    let signUpLink = fixture.debugElement.query(By.css('a.sign-up-link'));

    expect(loginLink).not.toBeNull();
    expect(signUpLink).not.toBeNull();

  }));

  it('should show the App name on page header', fakeAsync(() => {
    component.ngOnInit();
    component.app_fullname = "ACME Inc.";

    fixture.detectChanges();
    tick();

    let appNameElem = fixture.debugElement.query(By.css('div.navbar-header .navbar-brand'));

    expect(COMPANY.fullname).toEqual(COMPANY.fullname);
    expect(appNameElem.nativeElement.textContent).toContain("ACME Inc.");
  }));

});
