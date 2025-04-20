import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TtPlacePageRoutingModule } from './tt-place-routing.module';

import { TtPlacePage } from './tt-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtPlacePageRoutingModule
  ],
  declarations: [TtPlacePage]
})
export class TtPlacePageModule {}
