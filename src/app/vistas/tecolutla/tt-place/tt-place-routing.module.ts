import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TtPlacePage } from './tt-place.page';

const routes: Routes = [
  {
    path: '',
    component: TtPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TtPlacePageRoutingModule {}
