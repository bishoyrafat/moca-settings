import { EditFaqComponent } from './edit-faq/edit-faq.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: FaqsComponent },
  { path: 'editfaq/:id', component: EditFaqComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqsRoutingModule {}
