import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlansRoutingModule } from './plans-routing.module';
import { PlansNavbarComponent } from './plans-navbar/plans-navbar.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { PlansHourlyComponent } from './plans-hourly/plans-hourly.component';
import { PlansTailoredComponent } from './plans-tailored/plans-tailored.component';
import { PlansDayComponent } from './plans-day/plans-day.component';
import { PlansBundleComponent } from './plans-bundle/plans-bundle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlansComponent } from './plans/plans.component';
@NgModule({
  declarations: [
    PlansNavbarComponent,
    PlansHourlyComponent,
    PlansTailoredComponent,
    PlansDayComponent,
    PlansBundleComponent,
    PlansComponent,
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule

  ]
})
export class PlansModule { }
