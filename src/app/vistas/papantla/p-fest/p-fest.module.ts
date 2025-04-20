import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PFestPageRoutingModule } from './p-fest-routing.module';

import { PFestPage } from './p-fest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PFestPageRoutingModule
  ],
  declarations: [PFestPage]
})
export class PFestPageModule {}
