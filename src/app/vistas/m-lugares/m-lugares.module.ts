import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MLugaresPageRoutingModule } from './m-lugares-routing.module';

import { MLugaresPage } from './m-lugares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MLugaresPageRoutingModule
  ],
  declarations: [MLugaresPage]
})
export class MLugaresPageModule {}
