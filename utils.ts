/* tslint:disable:no-unused-variable */
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { reducer } from './../reducers';
import { AuthSharedModule } from "app/auth/auth-shared.module";
import { CoreSharedModule } from "app/core/core.shared.module";
import { Directive, Input } from "@angular/core";

export const IMPORTS = [
  TranslateModule.forRoot(),
  StoreModule.provideStore(reducer),
  RouterTestingModule,
  Ng2BootstrapModule.forRoot(),
];
