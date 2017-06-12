import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
declare let jQuery: any;


import { MenuItem } from './../../..//core/models/MenuItem';
import { AuthUser } from './../../../auth/models/authUser';

import { environment as env } from './../../../../environments/environment';

@Component({
  selector: 'app-main-top-navbar',
  templateUrl: './main-top-navbar.component.html',
  styles: [':host { display: block; }']
})
export class MainTopNavbarComponent implements OnInit {

  @Input()
  public authState;
  
  public company_cc_year = env.company_cc_year;
  public company_website = env.company_website;
  public app_fullname = env.app_fullname;
  public app_short_name = env.app_short_name;
  public app_version = env.app_version;

  public viewPortWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.viewPortWidth = event.target.innerWidth;
  }

  public constructor(public element: ElementRef) { }

  public ngOnInit() { }

  /**
   * Expands or shrinks the sidebar.
   */
  public toggleNavigation() {
    if (this.viewPortWidth < 768) {
      jQuery('.sidebar-mini').toggleClass('sidebar-open');
    } else {
      jQuery('.sidebar-mini').toggleClass('sidebar-collapse');
    }
  }

  /**
   * Expands or shrinks the control sidebar.
   */
  public toggleControlSidebar() {
    jQuery('.sidebar-mini').toggleClass('control-sidebar-open');
  }
}
