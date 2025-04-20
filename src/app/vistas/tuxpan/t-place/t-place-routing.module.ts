import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPlacePage } from './t-place.page';

const routes: Routes = [
  {
    path: '',
    component: TPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPlacePageRoutingModule {}
