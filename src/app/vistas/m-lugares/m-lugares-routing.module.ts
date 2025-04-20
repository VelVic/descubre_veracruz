import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MLugaresPage } from './m-lugares.page';

const routes: Routes = [
  {
    path: '',
    component: MLugaresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MLugaresPageRoutingModule {}
