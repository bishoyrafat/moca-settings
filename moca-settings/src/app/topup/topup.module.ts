import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopupRoutingModule } from './topup-routing.module';
import { TopupComponent } from './topup/topup.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [TopupComponent],
  imports: [
    CommonModule,
    TopupRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class TopupModule {}
