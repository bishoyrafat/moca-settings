import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayRoutingModule } from './day-routing.module';
import { DayComponent } from './day/day.component';


@NgModule({
  declarations: [
    DayComponent
  ],
  imports: [
    CommonModule,
    DayRoutingModule
  ]
})
export class DayModule { }
