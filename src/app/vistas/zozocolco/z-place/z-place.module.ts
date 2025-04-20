import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZPlacePageRoutingModule } from './z-place-routing.module';

import { ZPlacePage } from './z-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZPlacePageRoutingModule
  ],
  declarations: [ZPlacePage]
})
export class ZPlacePageModule {}
