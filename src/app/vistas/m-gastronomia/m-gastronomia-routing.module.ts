import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MGastronomiaPage } from './m-gastronomia.page';

const routes: Routes = [
  {
    path: '',
    component: MGastronomiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MGastronomiaPageRoutingModule {}
