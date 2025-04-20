import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZozocolcoPageRoutingModule } from './zozocolco-routing.module';

import { ZozocolcoPage } from './zozocolco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZozocolcoPageRoutingModule
  ],
  declarations: [ZozocolcoPage]
})
export class ZozocolcoPageModule {}
