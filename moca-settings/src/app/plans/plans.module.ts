import { SharedComponentsModule } from './../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponentComponent } from './plans-component/plans-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PlansComponentComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedComponentsModule,ReactiveFormsModule,HttpClientModule
  ],
  exports:[PlansComponentComponent],
})
export class PlansModule { }
