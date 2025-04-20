import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MFestejosPageRoutingModule } from './m-festejos-routing.module';

import { MFestejosPage } from './m-festejos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MFestejosPageRoutingModule
  ],
  declarations: [MFestejosPage]
})
export class MFestejosPageModule {}
