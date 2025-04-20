import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PFestPage } from './p-fest.page';

const routes: Routes = [
  {
    path: '',
    component: PFestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PFestPageRoutingModule {}
