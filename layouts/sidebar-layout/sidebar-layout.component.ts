import { AfterViewInit, Component, HostListener, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef, Renderer, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { environment as env } from './../../../../environments/environment';

import * as fromRoot from './../../../reducers';
import { State as AuthState } from './../../../auth/reducers/auth.reducer';
import { MainSidebarComponent } from './../../components/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './../../components/footer/footer.component';
import { MainTopNavbarComponent } from './../../components/main-top-navbar/main-top-navbar.component';

declare let jQuery: any;

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: [
    './sidebar-layout.component.css',
    './../../styles.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidebarLayoutComponent implements AfterViewInit, OnInit {

  public authState$: Observable<AuthState>;

  public company_cc_year = env.company_cc_year;
  public company_website = env.company_website;
  public app_fullname = env.app_fullname;
  public app_short_name = env.app_short_name;
  public app_version = env.app_version;

  public viewPortHeight: number = window.innerHeight;

  @ViewChild(MainTopNavbarComponent)
  public header: MainTopNavbarComponent;

  @ViewChild('wrapper')
  public wrapper: ElementRef;

  @ViewChild('contentWrapper')
  public contentWrapper: ElementRef;

  @ViewChild(MainFooterComponent)
  public footer: MainFooterComponent;

  @ViewChild(MainSidebarComponent)
  public sidebar: MainSidebarComponent;


  // listen the resize event on window
  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.viewPortHeight = event.target.innerHeight;
    this.fixHeight();
  }

  public constructor(private store: Store<fromRoot.State>, private renderer: Renderer) { }

  public ngOnInit() {
    this.authState$ = this.store.select(fromRoot.getAuthState);
  }

  ngAfterViewInit() {
    this.fixHeight();
  }

  /**
   * Fix the page height.
   */
  public fixHeight() {
    let sidebarHeight: number = this.sidebar.element.nativeElement.offsetHeight;
    let headerHeight: number = this.header.element.nativeElement.offsetHeight;
    let footerHeight: number = this.footer.element.nativeElement.offsetHeight;
    let minHeight: number = this.viewPortHeight - headerHeight;

    // window height >= sidebar height?
    if (this.viewPortHeight >= sidebarHeight) {
      minHeight = this.viewPortHeight - (headerHeight + footerHeight);
      this.renderer.setElementStyle(this.contentWrapper.nativeElement, 'min-height', minHeight + 'px');
    } else {
      this.renderer.setElementStyle(this.contentWrapper.nativeElement, 'min-height', (this.viewPortHeight - (headerHeight * 2 + footerHeight)) + 'px');
    }
  }
}
