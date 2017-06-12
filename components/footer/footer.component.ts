import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { environment as env } from './../../../../environments/environment';

@Component({
  selector: '[app-main-footer]',
  template: `
    <!-- To the right -->
    <div class="pull-right hidden-xs">
      <b>Version</b> {{ app_version }}
    </div>
    <!-- Default to the left -->
    <strong class="app-copy-right">
      Copyright &copy;{{ company_cc_year }} <a href="{{ company_website }}">{{ app_fullname }}</a>
    </strong>
    All rights reserved.
  `,
  styles: []
})
export class MainFooterComponent implements OnInit {

  public company_cc_year = env.company_cc_year;
  public company_website = env.company_website;
  public app_fullname = env.app_fullname;
  public app_short_name = env.app_short_name;
  public app_version = env.app_version;

  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

}
