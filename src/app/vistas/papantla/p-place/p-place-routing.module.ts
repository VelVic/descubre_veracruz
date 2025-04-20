import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPlacePage } from './p-place.page';

const routes: Routes = [
  {
    path: '',
    component: PPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPlacePageRoutingModule {}
