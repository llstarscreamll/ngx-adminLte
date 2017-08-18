import { ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer, ViewChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { environment as env } from './../../../../environments/environment';

import { State as AuthState } from './../../../auth/reducers/auth.reducer';
import * as fromRoot from './../../../reducers';
import { MainFooterComponent } from './../../components/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-top-layout',
  templateUrl: './nav-top-layout.component.html',
  styleUrls: [
    './../../styles.css',
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

  public collapseNavBar = true;
  public viewPortHeight: number = window.innerHeight;

  public company_cc_year = env.company_cc_year;
  public company_website = env.company_website;
  public app_fullname = env.app_fullname;
  public app_short_name = env.app_short_name;
  public app_version = env.app_version;

  public activeLang: string;

  public constructor(
    private store: Store<fromRoot.State>,
    private renderer: Renderer,
    private transSrvc: TranslateService,
  ) { }

  public ngOnInit() {
    this.authState$ = this.store.select(fromRoot.getAuthState);
    this.activeLang = this.transSrvc.currentLang;

    // fix the height
    const height = window.innerHeight - (this.header.nativeElement.offsetHeight + 2);
    this.renderer.setElementStyle(this.wrapper.nativeElement, 'min-height', height + 'px');
  }

  public changeLang(langKey: string) {
    if (this.activeLang !== langKey)  {
      this.transSrvc.use(langKey);
      this.activeLang = this.transSrvc.currentLang;
    }
  }
}
