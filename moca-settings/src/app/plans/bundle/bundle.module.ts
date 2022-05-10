import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundleRoutingModule } from './bundle-routing.module';
import { BundleComponent } from './bundle/bundle.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    BundleComponent
  ],
  imports: [
    CommonModule,
    BundleRoutingModule,
    SharedComponentsModule,
    ReactiveFormsModule

  ]
})
export class BundleModule { }
