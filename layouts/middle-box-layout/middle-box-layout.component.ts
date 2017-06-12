import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

import * as fromRoot from './../../../reducers';
import { environment as env } from './../../../../environments/environment';

@Component({
  selector: 'app-middle-box-layout',
  template: `
    <div class="login-box">
      <div class="login-logo">
        <a routerLink="/front/landing" class="app_short_name"><b>{{ app_short_name }}</b></a>
        <div class="clearfix"></div>
        <span class="app_fullname">{{ 'SHELL.Welcome to' | translate }} {{ app_fullname }}</span>
      </div>
      <div class="login-box-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: [
    './middle-box-layout.component.css',
  ],
  encapsulation: ViewEncapsulation.None
})
export class MiddleBoxLayoutComponent implements OnInit {

  @HostBinding('class')
  public classes: string = 'login-page';

  public company_cc_year = env.company_cc_year;
  public company_website = env.company_website;
  public app_fullname = env.app_fullname;
  public app_short_name = env.app_short_name;
  public app_version = env.app_version;

  constructor() { }

  ngOnInit() { }

}
