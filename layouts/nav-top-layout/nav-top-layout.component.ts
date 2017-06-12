import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment as env } from './../../../../environments/environment';

import { State as AuthState } from './../../../auth/reducers/auth.reducer';
import * as fromRoot from './../../../reducers';
import { MainFooterComponent } from './../../components/footer/footer.component';

@Component({
  selector: 'app-nav-top-layout',
  templateUrl: './nav-top-layout.component.html',
  styleUrls: [
    './nav-top-layout.component.css',
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavTopLayoutComponent implements OnInit {

  @ViewChild('header')
  public header: ElementRef;

  @ViewChild('wrapper')
  public wrapper: ElementRef;

  @ViewChild(MainFooterComponent)
  public footer: MainFooterComponent;

  public authState$: Observable<AuthState>;

  public collapseNavBar: boolean = true;
  public viewPortHeight: number = window.innerHeight;

  public company_cc_year = env.company_cc_year;
  public company_website = env.company_website;
  public app_fullname = env.app_fullname;
  public app_short_name = env.app_short_name;
  public app_version = env.app_version;

  constructor(
    private store: Store<fromRoot.State>,
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.authState$ = this.store.select(fromRoot.getAuthState);

    // fix the height
    let height = window.innerHeight - (this.header.nativeElement.offsetHeight + 2);
    this.renderer.setElementStyle(this.wrapper.nativeElement, 'min-height', height + 'px');
  }

}
