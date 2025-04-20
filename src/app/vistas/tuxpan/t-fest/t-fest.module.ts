import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TFestPageRoutingModule } from './t-fest-routing.module';

import { TFestPage } from './t-fest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TFestPageRoutingModule
  ],
  declarations: [TFestPage]
})
export class TFestPageModule {}
