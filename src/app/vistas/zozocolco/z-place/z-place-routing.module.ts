import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZPlacePage } from './z-place.page';

const routes: Routes = [
  {
    path: '',
    component: ZPlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZPlacePageRoutingModule {}
