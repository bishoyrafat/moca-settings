import { TailoredComponent } from './tailored/tailored.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: TailoredComponent ,pathMatch: 'full'},
  { path: ':id', component: TailoredComponent ,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TailoredRoutingModule {}
