import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'plans',
    loadChildren: () =>
      import('./plans/plans.module').then((m) => m.PlansModule),
  },
  { path: '', redirectTo: 'plans', pathMatch: 'full' },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then((m) => m.FaqsModule),
  },
  {
    path: 'topup',
    loadChildren: () => import('./topup/topup.module').then((m) => m.TopupModule),
  },
  {
    path: 'policies',
    loadChildren: () => import('./policies/policies.module').then((m) => m.PoliciesModule),
  },
  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then((m) => m.WifiModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
