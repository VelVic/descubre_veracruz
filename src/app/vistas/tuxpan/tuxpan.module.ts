import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuxpanPageRoutingModule } from './tuxpan-routing.module';

import { TuxpanPage } from './tuxpan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuxpanPageRoutingModule
  ],
  declarations: [TuxpanPage]
})
export class TuxpanPageModule {}
