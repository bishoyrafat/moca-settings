import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

import { TailoredRoutingModule } from './tailored-routing.module';
import { TailoredComponent } from './tailored/tailored.component';

@NgModule({
  declarations: [TailoredComponent],
  imports: [CommonModule, TailoredRoutingModule, SharedComponentsModule,ReactiveFormsModule],
})
export class TailoredModule {}
