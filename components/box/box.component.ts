import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  template: `<ng-content></ng-content><div *ngIf="isLoading" class="overlay"><i class="fa fa-refresh fa-spin"></i></div>`,
  styles: [`:host {display: block;}`]
})
export class BoxComponent implements OnInit {

  @Input()
  public isLoading = false;

  @HostBinding('class')
  public classes = 'box box-solid';

  @HostBinding('class.hide')
  @Input()
  public hidden = false;

  @HostBinding('class.collapsed-box')
  @Input()
  public collapse = false;

  public constructor() { }

  public ngOnInit() { }

  public toggleCollapse() {
    this.collapse = !this.collapse;
  }

  public hideBox() {
    this.hidden = true;
  }

}
