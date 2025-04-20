import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZFestPageRoutingModule } from './z-fest-routing.module';

import { ZFestPage } from './z-fest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZFestPageRoutingModule
  ],
  declarations: [ZFestPage]
})
export class ZFestPageModule {}
