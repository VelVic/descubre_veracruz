import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPlacePageRoutingModule } from './t-place-routing.module';

import { TPlacePage } from './t-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPlacePageRoutingModule
  ],
  declarations: [TPlacePage]
})
export class TPlacePageModule {}
