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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
