import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecolutlaPageRoutingModule } from './tecolutla-routing.module';

import { TecolutlaPage } from './tecolutla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecolutlaPageRoutingModule
  ],
  declarations: [TecolutlaPage]
})
export class TecolutlaPageModule {}
