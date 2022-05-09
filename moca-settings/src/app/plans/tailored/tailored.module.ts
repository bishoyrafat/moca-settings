import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailoredRoutingModule } from './tailored-routing.module';
import { TailoredComponent } from './tailored/tailored.component';


@NgModule({
  declarations: [
    TailoredComponent
  ],
  imports: [
    CommonModule,
    TailoredRoutingModule
  ]
})
export class TailoredModule { }
