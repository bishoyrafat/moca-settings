import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WifiRoutingModule } from './wifi-routing.module';
import { WifiComponent } from './wifi/wifi.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [WifiComponent,],
  imports: [
    CommonModule,
    WifiRoutingModule,SharedComponentsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class WifiModule { }
