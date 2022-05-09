import { SharedComponentsModule } from './../shared/shared-components/shared-components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponentComponent } from './plans-component/plans-component.component';


@NgModule({
  declarations: [
    PlansComponentComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedComponentsModule
  ]
})
export class PlansModule { }
