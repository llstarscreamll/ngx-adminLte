import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { isObject, forOwn } from 'lodash';

import * as fromRoot from './../../../reducers';
import { AppMessage } from './../../../core/models/appMessage';

@Component({
  selector: 'app-alerts',
  template: `
    <alert *ngIf="appMessage?.message"
      [type]="appMessage?.type"
      dismissible="true"
      [dismissOnTimeout]="dismissTime"
      (onClosed)="closed.emit(true)">
      <h4>
        <i class="icon {{ getIconAndMsgStyle(appMessage?.type) }}"></i>
        {{ 'SHELL.alert-' + appMessage?.type | translate }}!
        <span class="label label-{{ appMessage?.type }}">{{ appMessage.date | date:'mediumTime' }}</span>
      </h4>
      {{ appMessage.message }}
      <ul *ngIf="isObject(appMessage?.errors)" class="m-t-sm">
        <li *ngFor="let item of getErrorsArray(appMessage?.errors)">{{ item }}</li>
      </ul>
    </alert>
  `,
  styles: []
})
export class AlertsComponent implements OnInit, OnDestroy {

  @Input()
  public showErrors: boolean = true;

  @Input()
  public appMessage: AppMessage;

  @Output()
  public closed: EventEmitter<boolean> = new EventEmitter();

  public icon: string = '';
  public dismissTime: number = 30000;

  public constructor(private store: Store<fromRoot.State>) { }

  public ngOnInit() { }

  public ngOnDestroy() { }

  public isObject(messages: any):boolean {
    return isObject(messages);
  }

  public getErrorsArray(Obj: Object) {
    let array = [];

    forOwn(Obj, (value) => {
      array.push(value);
    });

    return array;
  }

  public getIconAndMsgStyle(type: string) {
    let iconStyle = '';

    switch (type) {
      case 'success': {
        iconStyle = 'fa fa-check';
        break;
      }
      case 'warning': {
        iconStyle = 'fa fa-warning';
        break;
      }
      case 'info': {
        iconStyle = 'fa fa-info';
        break;
      }
      default: {
        iconStyle = 'fa fa-ban';
        break;
      }
    }

    return this.icon = iconStyle;
  }
}
