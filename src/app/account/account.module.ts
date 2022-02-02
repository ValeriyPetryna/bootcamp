import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { MaterialModule } from '../shared/modules/material.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [AccountComponent],
})
export class AccountModule {}
