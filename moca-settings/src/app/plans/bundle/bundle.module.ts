import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BundleRoutingModule } from './bundle-routing.module';
import { BundleComponent } from './bundle/bundle.component';


@NgModule({
  declarations: [
    BundleComponent
  ],
  imports: [
    CommonModule,
    BundleRoutingModule
  ]
})
export class BundleModule { }
