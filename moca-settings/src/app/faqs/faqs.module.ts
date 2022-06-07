import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './faqs/faqs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EditFaqComponent } from './edit-faq/edit-faq.component';

@NgModule({
  declarations: [FaqsComponent, EditFaqComponent],
  imports: [
    CommonModule,
    FaqsRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
})
export class FaqsModule {}
