import { PlansComponent } from './plans/plans.component';
import { PlansTailoredComponent } from './plans-tailored/plans-tailored.component';
import { PlansDayComponent } from './plans-day/plans-day.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlansHourlyComponent } from './plans-hourly/plans-hourly.component';
import { PlansBundleComponent } from './plans-bundle/plans-bundle.component';

const routes: Routes = [
  {
    path:'',component:PlansComponent,children:[
      {
        path:'',redirectTo:'hourly/1'
      },
      {
        path:'hourly/:id',component:PlansHourlyComponent
      },
      {
        path:'day/:id',component:PlansDayComponent
      },
      {
        path:'tailored/:id',component:PlansTailoredComponent
      },
      {
        path:'bundle/:id',component:PlansBundleComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
