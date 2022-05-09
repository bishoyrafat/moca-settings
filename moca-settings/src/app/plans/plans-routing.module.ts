import { PlansComponentComponent } from './plans-component/plans-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlansComponentComponent,
    children: [
      {
        path: '',
        redirectTo: 'hourly',
        pathMatch: 'full',
      },
      {
        path: 'hourly',
        loadChildren: () =>
          import('./hourly/hourly.module').then((m) => m.HourlyModule),
      },
      {
        path: 'day',
        loadChildren: () => import('./day/day.module').then((m) => m.DayModule),
      },
      {
        path: 'tailored',
        loadChildren: () =>
          import('./tailored/tailored.module').then((m) => m.TailoredModule),
      },
      {
        path: 'bundle',
        loadChildren: () =>
          import('./bundle/bundle.module').then((m) => m.BundleModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansRoutingModule {}
