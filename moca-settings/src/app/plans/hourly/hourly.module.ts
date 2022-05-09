import { SharedComponentsModule } from './../../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HourlyRoutingModule } from './hourly-routing.module';
import { HourlyComponent } from './hourly/hourly.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HourlyComponent
  ],
  imports: [
    CommonModule,
    HourlyRoutingModule,SharedComponentsModule,ReactiveFormsModule
  ]
})
export class HourlyModule { }
