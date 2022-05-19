import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeetingSpaceComponent } from './topup/meeting-space/meeting-space.component'
import { TailoredComponent } from './topup/tailored/tailored.component';
import { HourlyComponent } from './topup/hourly/hourly.component';
import { DayComponent } from './topup/day/day.component';

import { TopupRoutingModule } from './topup-routing.module';
import { TopupComponent } from './topup/topup.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TopUpNavBarComponent } from './topup/topUp-navBar/topUp-navBar.component';
@NgModule({
  declarations: [
    TopupComponent,
    TopUpNavBarComponent,
    DayComponent,
    MeetingSpaceComponent,
    TailoredComponent,
    HourlyComponent

  ],
  imports: [
    CommonModule,
    TopupRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
  ],
})
export class TopupModule {}
