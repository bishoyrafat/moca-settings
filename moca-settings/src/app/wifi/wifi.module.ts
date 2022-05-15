import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WifiRoutingModule } from './wifi-routing.module';
import { WifiComponent } from './wifi/wifi.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WifiComponent,],
  imports: [
    CommonModule,
    WifiRoutingModule,SharedComponentsModule,ReactiveFormsModule
  ]
})
export class WifiModule { }
