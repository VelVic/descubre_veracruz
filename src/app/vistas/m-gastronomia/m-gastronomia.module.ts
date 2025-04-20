import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MGastronomiaPageRoutingModule } from './m-gastronomia-routing.module';

import { MGastronomiaPage } from './m-gastronomia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MGastronomiaPageRoutingModule
  ],
  declarations: [MGastronomiaPage]
})
export class MGastronomiaPageModule {}
