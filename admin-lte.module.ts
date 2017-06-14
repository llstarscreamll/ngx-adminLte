import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Ng2BootstrapModule } from 'ngx-bootstrap';

import { CoreSharedModule } from './../core/core.shared.module';

import { LAYOUTS } from './layouts';
import { COMPONENTS } from './components';
import { AuthSharedModule } from 'app/auth/auth-shared.module';

@NgModule({
  imports: [
    CoreSharedModule,
  ],
  providers: [],
  declarations: [...COMPONENTS, ...LAYOUTS],
  exports: [...COMPONENTS, ...LAYOUTS],
})
export class AdminLTEModule { }
