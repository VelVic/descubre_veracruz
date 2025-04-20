import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapantlaPageRoutingModule } from './papantla-routing.module';

import { PapantlaPage } from './papantla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PapantlaPageRoutingModule
  ],
  declarations: [PapantlaPage]
})
export class PapantlaPageModule {}
