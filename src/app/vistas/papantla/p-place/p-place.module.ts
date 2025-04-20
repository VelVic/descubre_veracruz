import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPlacePageRoutingModule } from './p-place-routing.module';

import { PPlacePage } from './p-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPlacePageRoutingModule
  ],
  declarations: [PPlacePage]
})
export class PPlacePageModule {}
