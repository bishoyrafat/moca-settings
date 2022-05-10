import { SharedComponentsModule } from './../../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayRoutingModule } from './day-routing.module';
import { DayComponent } from './day/day.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DayComponent
  ],
  imports: [
    CommonModule,
    DayRoutingModule,ReactiveFormsModule,SharedComponentsModule
  ]
})
export class DayModule { }
