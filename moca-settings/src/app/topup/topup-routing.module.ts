import { MeetingSpaceComponent } from './topup/meeting-space/meeting-space.component';
import { TailoredComponent } from './topup/tailored/tailored.component';
import { HourlyComponent } from './topup/hourly/hourly.component';
import { DayComponent } from './topup/day/day.component';
import { TopupComponent } from './topup/topup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TopupComponent,
    children: [
      {
        path: '',
        component: HourlyComponent,
      },

      {
        path: 'day/:id',
        component: DayComponent,
      },

      {
        path: 'hourly/:id',
        component: HourlyComponent,
      },

      {
        path: 'tailored/:id',
        component: TailoredComponent,
      },

      {
        path: 'meetingspace/:id',
        component: MeetingSpaceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopupRoutingModule {}
