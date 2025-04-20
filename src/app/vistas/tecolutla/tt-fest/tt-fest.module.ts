import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TtFestPageRoutingModule } from './tt-fest-routing.module';

import { TtFestPage } from './tt-fest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TtFestPageRoutingModule
  ],
  declarations: [TtFestPage]
})
export class TtFestPageModule {}
