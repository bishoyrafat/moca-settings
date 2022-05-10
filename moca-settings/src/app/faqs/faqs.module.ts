import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule,SharedComponentsModule,ReactiveFormsModule
  ]
})
export class FaqsModule { }
